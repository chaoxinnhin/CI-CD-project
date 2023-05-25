import express from "express";
import * as carValueController from "../controller/carValueController";

const router = express.Router();

router.get("/", carValueController.calculateCarValue);

export default router;
