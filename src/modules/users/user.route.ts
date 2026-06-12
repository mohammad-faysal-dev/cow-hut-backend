import { userController } from "./user.controller";
import express from "express";
const router = express.Router();

router.post("/create-user", userController.createUser);
router.get("/", userController.getAllUserData)
router.get("/:id", userController.getSingleUser)

export const userRoutes = router;
