import express from "express";
import * as carValueController from "../controller/carValueController";

const router = express.Router();

router.get("/", carValueController.carValidationGrace);

export default router;
