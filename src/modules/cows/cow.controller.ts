import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { CowService } from "./cow.service";

const createCow = catchAsync(async (req, res) => {
    const { ...cowData } = req.body;
    const result = await CowService.createCow(cowData)
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Cow created successfully',
        data: result
    })
})

const getSingleCow = catchAsync(async (req, res) => {
    const id = req.params.id as string;
    const result = await CowService.getSingleCow(id)
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Cow fetched successfully',
        data: result
    })
})

export const CowController = {
    createCow,
    getSingleCow
}