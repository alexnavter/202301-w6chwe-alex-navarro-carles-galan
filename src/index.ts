import "./loadEnvironment.js";
import connectDatabase from "./database/database.js";
import startServer from "./server/startServer.js";
import createDebug from "debug";

export const debug = createDebug("robots:root");

const port = process.env.PORT ?? 4000;
const mongoDbUrl = process.env.MONGODB_CONNECTION_URL;

await startServer(+port);
await connectDatabase(mongoDbUrl!);
