import { userController } from "./user.controller";
import express from "express";
const router = express.Router();

router.get("/", userController.getAllUserData)
router.get("/:id", userController.getSingleUser)
router.patch("/:id", userController.updateUser)
router.delete("/:id", userController.deletedUser)

export const userRoutes = router;
