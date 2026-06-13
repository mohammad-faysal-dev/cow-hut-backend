import { model, Schema } from "mongoose";
import { ICow } from "./cow.interface";

const cowSchema = new Schema<ICow>({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    level: {
        type: String,
        requird: true
    },
    breed: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    seller: {
        type: Schema.Types.ObjectId,
        ref: 'UserData'
    }
},
    {
        timestamps: true
    })

export const CowData = model<ICow>('CowData', cowSchema)