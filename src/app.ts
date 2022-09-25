import "reflect-metadata";
import "express-async-errors";
import express from "express";
import appRoutes from "./routers";

const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

appRoutes(app);

export default app;
