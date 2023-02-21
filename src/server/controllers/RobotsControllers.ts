import { type NextFunction, type Request, type Response } from "express";
import { CustomError } from "../../CustomError/CustomError.js";
import { Robot } from "../../database/models/Robot.js";

export const getRobots = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const robots = await Robot.find().exec();

    res.status(200).json({ robots });
  } catch (error) {
    const customError = new CustomError(
      error as string,
      500,
      "Couldn't retrieve the robot"
    );

    next(customError);
  }
};
