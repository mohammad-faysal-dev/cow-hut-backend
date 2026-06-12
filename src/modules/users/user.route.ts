import { userController } from "./user.controller";
import express from "express";
const router = express.Router();

router.post("/create-user", userController.createUser);
router.get("/", userController.getAllUserData)


export const userRoutes = router;
