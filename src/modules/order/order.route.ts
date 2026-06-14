import { OrderController } from "./order.controller"
import express from "express"

const router = express.Router()
router.post('/create-order', OrderController.createOrder)

export const OrderRoute = router
