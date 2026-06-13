import { IUser } from "../users/user.interface";
import { UserData } from "../users/user.modal";

const createUser = async (user: IUser): Promise<IUser | null> => {
    const result = await UserData.create(user);
    return result;
};

export const authService = {
    createUser
}