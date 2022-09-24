import "reflect-metadata";
import "express-async-errors";
import express from "express";
// import handleAppErrorMiddleware from "./middlewares/handleAppError.middleware";
import appRoutes from "./routers";

const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

appRoutes(app);

// app.use(handleAppErrorMiddleware);

export default app;
