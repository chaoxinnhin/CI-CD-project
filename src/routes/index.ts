import express from "express";
import * as taskController from "../controller/riskratingConroller";

const router = express.Router();

router.get("/", taskController.getAllClaims);

router.post("/", taskController.createOneClaim);

router.get("/:id", taskController.getOneClaim);

router.delete("/:id", taskController.deleteClaim);

router.put("/:id", taskController.updateClaim);

router.patch("/:id", taskController.updateClaimPartial);

export default router;
