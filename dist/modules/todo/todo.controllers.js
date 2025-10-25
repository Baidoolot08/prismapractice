"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../../config/prisma"));
const getAllData = async (req, res) => {
    try {
        const data = await prisma_1.default.user.findMany();
        res.status(200).json({
            success: true,
            data,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: `Error in getAllData: ${error}`,
        });
    }
};
const addNewData = async (req, res) => {
    try {
        const { name, age, personUrl, hobby } = req.body;
        if (!name || !age || !personUrl || !hobby) {
            return res.status(400).json({
                success: false,
                error: "Баардык талаалар толтурулушу керек!",
            });
        }
        const existingUser = await prisma_1.default.user.findFirst({
            where: { name, age: Number(age) },
        });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                error: "Аты жана жашы башкача болуш керек!",
            });
        }
        const newUser = await prisma_1.default.user.create({
            data: {
                name,
                age: Number(age),
                personUrl,
                hobby,
            },
        });
        res.status(201).json({
            success: true,
            data: newUser,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: `Error in addNewData: ${error}`,
        });
    }
};
const delNewData = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await prisma_1.default.user.delete({
            where: { id: Number(id) },
        });
        res.status(200).json({
            success: true,
            message: "Колдонуучу өчүрүлдү",
            data: deletedUser,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: `Error in delNewData: ${error}`,
        });
    }
};
const patchData = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age, personUrl, hobby } = req.body;
        const user = await prisma_1.default.user.findUnique({
            where: { id: Number(id) },
        });
        if (!user) {
            return res.status(404).json({
                success: false,
                error: "Колдонуучу табылган жок",
            });
        }
        const updatedUser = await prisma_1.default.user.update({
            where: { id: Number(id) },
            data: {
                name: name ?? user.name,
                age: age !== undefined ? Number(age) : user.age,
                personUrl: personUrl ?? user.personUrl,
                hobby: hobby ?? user.hobby,
            },
        });
        res.status(200).json({
            success: true,
            data: updatedUser,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: `Ката patchData: ${error}`,
        });
    }
};
const putData = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age, personUrl, hobby } = req.body;
        const user = await prisma_1.default.user.findUnique({
            where: { id: Number(id) },
        });
        if (!user) {
            return res.status(404).json({
                success: false,
                error: "Колдонуучу табылган жок",
            });
        }
        const updatedUser = await prisma_1.default.user.update({
            where: { id: Number(id) },
            data: {
                name,
                age: Number(age),
                personUrl,
                hobby,
            },
        });
        res.status(200).json({
            success: true,
            data: updatedUser,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: `Ката putData: ${error}`,
        });
    }
};
exports.default = {
    getAllData,
    addNewData,
    delNewData,
    patchData,
    putData,
};
//# sourceMappingURL=todo.controllers.js.map