import Router from "express";
import { getRobots } from "../controllers/RobotsControllers.js";
import auth from "../middlewares/auth.js";

export const robotsRouter = Router();

robotsRouter.post("/", getRobots);
