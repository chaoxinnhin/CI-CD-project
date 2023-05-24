import express from "express";
import env from "dotenv";


env.config();

const server = express();
server.use(express.json());

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`The server is started on port ${PORT}`);
});
