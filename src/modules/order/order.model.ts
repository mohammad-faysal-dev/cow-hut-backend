import { model, Schema } from "mongoose";
import { IOrder } from "./order.interface";

const orderSchema = new Schema<IOrder>({
    cow: {
        type: Schema.Types.ObjectId,
        ref: 'CowData'
    },
    buyer: {
        type: Schema.Types.ObjectId,
        ref: 'UserData'
    }
}, { timestamps: true })

export const Order = model<IOrder>('Order', orderSchema)