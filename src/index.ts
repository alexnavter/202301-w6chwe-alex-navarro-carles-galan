import "./loadEnvironment.js";
import app from "./server/index.js";
import startServer from "./server/startServer.js";

const port = process.env.PORT ?? 4000;

await startServer(+port);

app.use("/robots", (req, res) => {
  res.status(200).json({ pong: true });
});
