import { type NextFunction, type Request, type Response } from "express";

export const getRobots = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json({ ping: "pong" });
  } catch (error) {}
};
