import router from "./routes/index";
import express from "express";

const app = express();
app.use(express.json());

app.use("/api/car_value", router);

export default app;
