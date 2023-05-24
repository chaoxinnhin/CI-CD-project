import { carValidationGrace } from "./controller/carValueController";
import express from "express";

const app = express();
app.use(express.json());

app.use("/api/car_value", carValidationGrace);

export default app