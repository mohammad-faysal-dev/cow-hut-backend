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

export const CowController = {
    createCow
}