import { IUser } from "./user.interface";
import { UserData } from "./user.modal";

const createUser = async (user: IUser): Promise<IUser | null> => {
  const result = await UserData.create(user);
  return result;
};

const getUserAllData = async () => {
  const result = await UserData.find()
  return result
}
const getSingleUser = async (id: string) => {
  const result = await UserData.findById(id)
  return result
}

const updateUser = async (id: string, payload: Partial<IUser>): Promise<IUser | null> => {
  const result = await UserData.findOneAndUpdate({ _id: id }, payload, { new: true })
  return result
}

const deletedUser = async (id: string) => {
  const result = await UserData.findByIdAndDelete(id)
  return result
}
export const userService = {
  createUser,
  getUserAllData,
  getSingleUser,
  updateUser,
  deletedUser
}
