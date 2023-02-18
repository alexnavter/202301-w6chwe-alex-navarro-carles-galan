import express from "express";
import morgan from "morgan";
import { robotsRouter } from "./router/Router.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use("/", robotsRouter);

export default app;
