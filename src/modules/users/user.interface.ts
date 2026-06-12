export type IUserRole = "seller" | "buyer";

export type IUserName = {
  firstName: string;
  lastName: string;
};

export interface IUser {
  name: IUserName;
  phoneNumber: string;
  role: IUserRole;
  password: string;
  address: string;
  budget: number;
  income: number;
}
