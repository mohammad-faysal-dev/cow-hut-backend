import { CowController } from "./cow.controller";
import express from "express";


const router = express.Router();

router.post('/create-cow', CowController.createCow)
router.get('/:id', CowController.getSingleCow)
router.patch("/:id", CowController.updateCow)

export const CowRoutes = router