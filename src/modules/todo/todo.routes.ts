import { Router } from "express";
import todoControllers from "./todo.controllers";

const todoRoutes = Router();
todoRoutes.get("/get-all", todoControllers.getAllData);
todoRoutes.post("/add", todoControllers.addNewData);
todoRoutes.delete("/del/:id", todoControllers.delNewData);
todoRoutes.patch("/patch/:id", todoControllers.patchData);
todoRoutes.put("/put/:id", todoControllers.putData);
export default todoRoutes;


