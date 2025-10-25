import { Request, Response } from "express";
import prisma from "../../config/prisma";

const getAllData = async (req: Request, res: Response) => {
  try {
    const data = await prisma.user.findMany();
    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: `Error in getAllData: ${error}`,
    });
  }
};

const addNewData = async (req: Request, res: Response) => {
  try {
    const { name, age, personUrl, hobby } = req.body;

    if (!name || !age || !personUrl || !hobby) {
      return res.status(400).json({
        success: false,
        error: "Баардык талаалар толтурулушу керек!",
      });
    }

    const existingUser = await prisma.user.findFirst({
      where: { name, age: Number(age) },
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        error: "Аты жана жашы башкача болуш керек!",
      });
    }

    const newUser = await prisma.user.create({
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
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in addNewData: ${error}`,
    });
  }
};

const delNewData = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedUser = await prisma.user.delete({
      where: { id: Number(id) },
    });

    res.status(200).json({
      success: true,
      message: "Колдонуучу өчүрүлдү",
      data: deletedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in delNewData: ${error}`,
    });
  }
};

const patchData = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, age, personUrl, hobby } = req.body;

    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        error: "Колдонуучу табылган жок",
      });
    }

    const updatedUser = await prisma.user.update({
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
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Ката patchData: ${error}`,
    });
  }
};

const putData = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, age, personUrl, hobby } = req.body;

    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        error: "Колдонуучу табылган жок",
      });
    }

    const updatedUser = await prisma.user.update({
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
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Ката putData: ${error}`,
    });
  }
};

export default {
  getAllData,
  addNewData,
  delNewData,
  patchData,
  putData,
};
