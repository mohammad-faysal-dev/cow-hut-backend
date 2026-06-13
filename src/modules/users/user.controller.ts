import { Request, Response } from "express";
import { userService } from "./user.service";
import sendResponse from "../../shared/sendResponse";
import catchAsync from "../../shared/catchAsync";


const getAllUserData = catchAsync(async (req, res) => {
  const result = await userService.getUserAllData()
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Users data featched successfully",
    data: result
  })
})

const getSingleUser = catchAsync(async (req, res) => {
  const id = req.params.id as string
  const result = await userService.getSingleUser(id)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "single user featched successfully",
    data: result
  })
})
const updateUser = catchAsync(async (req, res) => {
  const id = req.params.id as string
  const result = await userService.updateUser(id, req.body)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "user updated successfully",
    data: result
  })
})

const deletedUser = catchAsync(async (req, res) => {
  const id = req.params.id as string
  const result = await userService.deletedUser(id)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "user deleted successfully",
    data: result
  })
})
export const userController = {
  getAllUserData,
  getSingleUser,
  updateUser,
  deletedUser
};
