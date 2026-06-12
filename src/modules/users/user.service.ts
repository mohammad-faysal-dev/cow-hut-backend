import { IUser } from "./user.interface";
import { User } from "./user.modal";

const createUser = async (user: IUser): Promise<IUser | null> => {
  const result = await User.create(user);
  return result;
};

export const userService= {
    createUser
}
