import { Request, Response } from "express";
import { authService } from "./auth.service";

const createUser = async (req: Request, res: Response) => {
    const { ...userData } = req.body;
    const result = await authService.createUser(userData);
    res.json({
        statusCode: 200,
        success: true,
        message: "User created successfully",
        data: result,
    })
};

export const authController = {
    createUser
}