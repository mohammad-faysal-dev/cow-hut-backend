import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";

const nameSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
},
  {
    _id: false
  }
);

const userSchema = new Schema<IUser>({
  name: nameSchema,
  phoneNumber: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  budget: {
    type: Number,
    default: 0,
    min: 0,
  },
  income: {
    type: Number,
    default: 0,
    min: 0,
  },

},
  {
    timestamps: true
  }
);

export const UserData = model<IUser>("UserData", userSchema);
