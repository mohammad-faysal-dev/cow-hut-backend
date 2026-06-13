import { CowController } from "./cow.controller";
import express from "express";


const router = express.Router();

router.post('/create-cow', CowController.createCow)

export const CowRoutes = router