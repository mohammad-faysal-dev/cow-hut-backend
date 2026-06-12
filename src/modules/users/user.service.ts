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


export const userService = {
  createUser,
  getUserAllData,
}
