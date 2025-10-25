"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_controllers_1 = __importDefault(require("./todo.controllers"));
const todoRoutes = (0, express_1.Router)();
todoRoutes.get("/get-all", todo_controllers_1.default.getAllData);
todoRoutes.post("/add", todo_controllers_1.default.addNewData);
todoRoutes.delete("/del/:id", todo_controllers_1.default.delNewData);
todoRoutes.patch("/patch/:id", todo_controllers_1.default.patchData);
todoRoutes.put("/put/:id", todo_controllers_1.default.putData);
exports.default = todoRoutes;
//# sourceMappingURL=todo.routes.js.map