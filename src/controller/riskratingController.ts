import { Request, Response } from "express";
import * as riskService from "../services/riskService";

export const getAllClaims = (req: Request, res: Response) => {
  const tasks = riskService.getAllClaims();
  res.send(tasks);
};

export const createOneClaim = (req: Request, res: Response) => {
  const claim = req.body.claim;
  const newClaim = riskService.createOneClaim(claim);

  res.status(201).send(newClaim);
};

export const getOneClaim = (req: Request, res: Response) => {
  const taskId = parseInt(req.params.id);

  try {
    const matchedTask = riskService.getOneClaim(taskId);
    res.send(matchedTask);
  } catch (e) {
    res.status(404).send(e);
  }
};

export const deleteClaim = (req: Request, res: Response) => {
  const claimId = parseInt(req.params.id);

  try {
    const hasDeleted = riskService.deleteClaim(claimId);
    if (hasDeleted) {
      res.status(204).send(`Claim ${claimId} deleted successfully!`);
    } else {
      res.status(500).send(`Task ${claimId} deletion failed!`);
    }
  } catch (e) {
    res.status(404).send(e);
  }
};

export const updateClaim = (req: Request, res: Response) => {
  const taskId = parseInt(req.params.id);

  const claim = req.body.claim;
  const riskRating = req.body.riskRating;

  try {
    const updatedTask = riskService.updateClaim({
      id: taskId,
      claim,
      riskRating,
    });
    res.send(updatedTask);
  } catch (e) {
    res.status(404).send(e);
  }
};

export const updateClaimPartial = (req: Request, res: Response) => {
  const taskId = parseInt(req.params.id);

  const claim = req.body.claim;
  const riskRating = req.body.riskRating;

  try {
    const updatedTask = riskService.updateClaimPartial({
      id: taskId,
      claim,
      riskRating,
    });
    res.send(updatedTask);
  } catch (e) {
    res.status(404).send(e);
  }
};
