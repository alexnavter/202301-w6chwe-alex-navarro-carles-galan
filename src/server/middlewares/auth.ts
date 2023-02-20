import "../../loadEnvironment.js";
import { type NextFunction, type Request, type Response } from "express";
import { CustomError } from "../../CustomError/CustomError.js";
import jsonWebToken from "jsonwebtoken";
import { Robot } from "../../database/models/Robot.js";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.header("Authorization")) {
    const customError = new CustomError(
      "Missing authorization",
      401,
      "missing token"
    );

    next(customError);
    return;
  }

  if (!req.header("Authorization")?.includes("Bearer")) {
    const customError = new CustomError(
      "Missing authorization",
      401,
      "missing token"
    );

    next(customError);
    return;
  }

  try {
    const token = req.header("Authorization")?.replace(/^Bearer\s*/, "");

    const { sub: ownerId } = jsonWebToken.verify(token!, process.env.JWT!);

    const robots = await Robot.find({ owner: ownerId });

    res.status(200).json({ robots });
  } catch (error) {
    next(error);
  }
};
