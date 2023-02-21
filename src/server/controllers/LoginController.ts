import "../../loadEnvironment.js";
import { type NextFunction, type Request, type Response } from "express";
import { type UserCredentials } from "../../types.js";
import jwt from "jsonwebtoken";
import { CustomError } from "../../CustomError/CustomError.js";
import User from "../../database/models/User.js";

const loginUser = async (
  req: Request<
    Record<string, unknown>,
    Record<string, unknown>,
    UserCredentials
  >,
  res: Response,
  next: NextFunction
) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username, password });

  if (!user) {
    const customError = new CustomError(
      "Wrong credentials",
      401,
      "Wrong credentials"
    );

    next(customError);

    return;
  }

  const jwtPayload = {
    sub: user?._id,
  };

  const token = jwt.sign(jwtPayload, process.env.JWT!);

  res.status(200).json({ token });
};

export default loginUser;
