import { Request, Response } from "express";
import createClientService from "../services/createClient.service";
import listClientsService from "../services/listClients.service";
// import createClientS from "../services/user/createUser.service";
// import deleteUserService from "../services/user/deleteUser.service";
// import listOneUserService from "../services/user/listOneUser.service";
// import listUsersService from "../services/user/listUsers.service";
// import updateInfoUserService from "../services/user/updateInfoUser.service";

export const createClientController = async (req: Request, res: Response) => {
  const { name, email, phone } = req.body;

  const client = await createClientService({ name, email, phone });

  return res.status(201).json(client);
};

export const listClientsConstroller = async (req: Request, res: Response) => {
  const clients = await listClientsService();

  return res.status(200).json(clients);
};

// export const listOneUserController = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const user = await listOneUserService(id);

//   return res.status(200).json(user);
// };

// export const updateInfoUserController = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const data = req.reqData;

//   const user = await updateInfoUserService(id, data);

//   return res.status(200).json(user);
// };

// export const deleteUserController = async (req: Request, res: Response) => {
//   const { id } = req.params;

//   await deleteUserService(id);

//   return res.status(200).json({ message: "User deleted" });
// };
