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
const getAllUserData = async (req: Request, res: Response) => {
  const result = await userService.getUserAllData()
  res.json({
    stausCode: 200,
    success: true,
    message: "Users data featched successfully",
    data: result
  })
}

const getSingleUser = async (req: Request, res: Response) => {
  const id = req.params.id as string
  const result = await userService.getSingleUser(id)
  res.json({
    statusCode: 200,
    success: true,
    message: "single user featched successfully",
    data: result
  })
}
const updateUser = async (req: Request, res: Response) => {
  const id = req.params.id as string
  const result = await userService.updateUser(id, req.body)
  res.json({
    statusCode: 200,
    success: true,
    message: "user updated successfully",
    data: result
  })
}

const deletedUser = async (req: Request, res: Response) => {
  const id = req.params.id as string
  const result = await userService.deletedUser(id)
  res.json({
    statusCode: 200,
    success: true,
    message: "user deleted successfully",
    data: result
  })
}
export const userController = {
  createUser,
  getAllUserData,
  getSingleUser,
  updateUser,
  deletedUser
};
