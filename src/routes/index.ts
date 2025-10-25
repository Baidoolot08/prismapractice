import { Router } from "express";
import todoRoutes from "../modules/todo/todo.routes";
import cors from "cors"

const globalRoutes = Router()

const corsConfig = {
	origin: ["http:localhost:3000"]
}
globalRoutes.use(cors(corsConfig))
globalRoutes.use("/todo",  todoRoutes)

export default globalRoutes