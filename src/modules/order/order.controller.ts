import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { orderService } from "./order.service";

const createOrder = catchAsync(async (req, res) => {
    const result = await orderService.createOrder(req.body)
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Order created successfully",
        data: result
    })
})

export const OrderController = {
    createOrder
}