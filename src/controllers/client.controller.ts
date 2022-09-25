import { Request, Response } from "express";
import createClientService from "../services/createClient.service";
import removeClientService from "../services/removeClient.service";
import listClientsService from "../services/listClients.service";

export const createClientController = async (req: Request, res: Response) => {
  const { name, email, phone } = req.body;

  const client = await createClientService({ name, email, phone });

  return res.status(201).json(client);
};

export const listClientsConstroller = async (req: Request, res: Response) => {
  const clients = await listClientsService();

  return res.status(200).json(clients);
};

export const removeClientController = async (req: Request, res: Response) => {
  const { id } = req.params;

  await removeClientService(id);

  return res.status(200).json([]);
};
