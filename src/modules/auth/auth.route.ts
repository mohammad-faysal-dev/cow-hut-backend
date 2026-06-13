import { authController } from "./auth.controller"
import express from "express"

const router = express.Router()

router.post("/signup", authController.createUser)

export const authRoutes = router