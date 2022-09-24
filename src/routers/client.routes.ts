import { Router } from "express";

import {
  createClientController,
  listClientsConstroller,
} from "../controllers/user.controller";

const clientRouter = Router();

clientRouter.post("", createClientController);
clientRouter.get("", listClientsConstroller);

export default clientRouter;

// import {
//   createUserController,
//   deleteUserController,
//   listOneUserController,
//   listUsersConstroller,
//   updateInfoUserController,
// } from "../controllers/user.controller";
// import isOwnership from "../middlewares/isOwnership.middleware";
// import isUuidMiddleware from "../middlewares/isUUID.middleware";
// import tokenValidation from "../middlewares/tokenValidation.middleware";
// import { validate } from "../middlewares/validate.middleware";
// import { userCreateSchema, userUpdateSchema } from "../schemas/user.schema";

// const userRouter = Router();

// userRouter.post("", validate(userCreateSchema), createUserController);
// userRouter.get("", listUsersConstroller);
// userRouter.get("/:id", isUuidMiddleware, listOneUserController);
// userRouter.patch(
//   "/:id",
//   isUuidMiddleware,
//   tokenValidation,
//   isOwnership,
//   validate(userUpdateSchema),
//   updateInfoUserController
// );
// userRouter.delete(
//   "/:id",
//   isUuidMiddleware,
//   tokenValidation,
//   isOwnership,
//   deleteUserController
// );

// export default userRouter;
