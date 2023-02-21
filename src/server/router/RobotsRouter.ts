import Router from "express";
import { getRobots } from "../controllers/RobotsControllers.js";

export const robotsRouter = Router();

robotsRouter.get("/", getRobots);
