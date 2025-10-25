import cors from "cors";
import express from "express";
import globalRoutes from "./routes";
const buildServer = () => {
  const server = express();
  server.use(cors());
  server.use(express.json());
  server.get("/", (req, res) => {
    res.status(200).json({
      message: "Hello World",
    });
  });
  server.use("/api", globalRoutes);
  return server;
};
export default buildServer;
