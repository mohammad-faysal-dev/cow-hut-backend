import mongoose from "mongoose";
import { IOrder } from "./order.interface";
import { CowData } from "../cows/cow.model";
import { UserData } from "../users/user.modal";
import ApiError from "../../errors/ApiError";
import { Order } from "./order.model";

const createOrder = async (payload: IOrder): Promise<IOrder[]> => {
    const session = await mongoose.startSession()
    try {
        session.startTransaction()
        const cow = await CowData.findById(payload.cow).session(session)
        const buyer = await UserData.findById(payload.buyer).session(session)
        if (!cow || !buyer) {
            throw new ApiError(400, 'Cow or Buyer not found')
        }
        if (buyer.budget < cow.price) {
            throw new ApiError(400, 'Insufficient budget')
        }
        await CowData.findByIdAndUpdate(cow._id, { status: 'sold out' }, { session })
        await UserData.findByIdAndUpdate(buyer._id, { $inc: { budget: -cow.price } }, { session })
        await UserData.findByIdAndUpdate(cow.seller, { $inc: { income: cow.price } }, { session })
        const order = await Order.create([
            {
                cow: cow._id,
                buyer: buyer._id
            }
        ], { session })
        await session.commitTransaction()
        session.endSession()
        return order
    } catch (error) {
        session.abortTransaction()
        session.endSession()
        throw error
    }
}
export const orderService = {
    createOrder
}