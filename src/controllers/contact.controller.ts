import { Request, Response } from "express";
import createContactService from "../services/createContact.service";

export const createContactController = async (req: Request, res: Response) => {
  const { name, email, phone } = req.body;
  const { clientId } = req.params;

  const client = await createContactService({ name, email, phone, clientId });

  return res.status(201).json(client);
};

// export const listClientsConstroller = async (req: Request, res: Response) => {
//   const clients = await listClientsService();

//   return res.status(200).json(clients);
// };

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
