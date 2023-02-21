import { type Request } from "express";
import { type JwtPayload } from "jsonwebtoken";

export interface RobotStructure {
  _id: string;
  name: string;
  url: string;
  specs: {
    speed: number;
    endurance: number;
    creationDate: string;
  };
}
export type RobotsStructure = RobotStructure[];

export interface UserCredentials {
  username: string;
  password: string;
}

export interface CustomRequest extends Request {
  ownerId: string;
}

export interface CustomJwtPayload extends JwtPayload {
  sub: string;
}
