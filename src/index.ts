import connectDatabase from "./database/database.js";
import "./loadEnvironment.js";
import startServer from "./server/startServer.js";

const port = process.env.PORT ?? 4000;
const mongoDbUrl = process.env.MONGODB_CONNECTION_URL;

await startServer(+port);
await connectDatabase(mongoDbUrl!);
