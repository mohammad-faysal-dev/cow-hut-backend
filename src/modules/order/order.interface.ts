import { Types } from "mongoose";

export interface IOrder {
    cow: Types.ObjectId
    buyer: Types.ObjectId
}