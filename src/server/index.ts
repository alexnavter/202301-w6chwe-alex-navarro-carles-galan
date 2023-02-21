import express from "express";
import morgan from "morgan";
import cors from "cors";
import { generalError, notFoundError } from "./middlewares/errorMiddleware.js";
import auth from "./middlewares/auth.js";
import usersRouter from "./router/UsersRouter.js";
import { robotsRouter } from "./router/RobotsRouter.js";

const app = express();

app.disable("x-powered-by");

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/robots", auth, robotsRouter);
app.use("/users", usersRouter);

app.use("/", notFoundError);
app.use("/", generalError);

export default app;
