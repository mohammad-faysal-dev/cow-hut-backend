import { paginationFields } from "../../constants/pagination";
import catchAsync from "../../shared/catchAsync";
import pick from "../../shared/pick";
import sendResponse from "../../shared/sendResponse";
import { cowFilterableFields } from "./cow.constant";
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

const getAllCows = catchAsync(async (req, res) => {
    const filters = pick(req.query, cowFilterableFields)
    const paginationOptions = pick(req.query, paginationFields)
    const result = await CowService.getAllCows(filters, paginationOptions)
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Cows fetched successfully',
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

const updateCow = catchAsync(async (req, res) => {
    const id = req.params.id as string;
    const { ...cowData } = req.body
    const result = await CowService.updateCow(id, cowData)
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Cow updated successfully',
        data: result
    })
})
const deleteCow = catchAsync(async (req, res) => {
    const id = req.params.id as string
    const result = await CowService.deleteCow(id)
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Cow deleted successfully',
        data: result
    })
})

export const CowController = {
    createCow,
    getAllCows,
    getSingleCow,
    updateCow,
    deleteCow
}