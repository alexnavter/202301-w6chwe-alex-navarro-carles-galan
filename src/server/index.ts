import express from "express";
import morgan from "morgan";
import { robotsRouter } from "./router/Router.js";
import cors from "cors";
import usersRouter from "./router/UsersRouter.js";
import { generalError, notFoundError } from "./middlewares/errorMiddleware.js";

const app = express();

app.disable("x-powered-by");

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/robots", robotsRouter);
app.use("/users", usersRouter);

app.use("/", notFoundError);
app.use("/", generalError);

export default app;
