import Router from "express";
import { getRobots } from "../controllers/RobotsControllers";

export const robotsRouter = Router();

robotsRouter.get("/robots", getRobots);
