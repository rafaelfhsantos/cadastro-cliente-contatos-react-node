import { Router } from "express";

import {
  createClientController,
  listClientsConstroller,
  removeClientController,
} from "../controllers/client.controller";

const clientRouter = Router();

clientRouter.post("", createClientController);
clientRouter.get("", listClientsConstroller);
clientRouter.delete("/:id", removeClientController);

export default clientRouter;
