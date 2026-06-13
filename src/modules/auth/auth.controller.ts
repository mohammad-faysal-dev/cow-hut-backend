import { Request, Response } from "express";
import { authService } from "./auth.service";
import sendResponse from "../../shared/sendResponse";
import catchAsync from "../../shared/catchAsync";

const createUser = catchAsync(async (req, res) => {
    const { ...userData } = req.body;
    const result = await authService.createUser(userData);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "User created successfully",
        data: result
    })
})

export const authController = {
    createUser
}