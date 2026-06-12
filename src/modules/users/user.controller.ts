import { Request, Response } from "express";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  const { ...userData } = req.body;
  const result = await userService.createUser(userData);
  res.json({
    statusCode: 200,
    success: true,
    message: "Users created successfully",
    data: result,
  });
};
export const userController = {
  createUser,
};
