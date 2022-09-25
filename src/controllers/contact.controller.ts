import { Request, Response } from "express";
import createContactService from "../services/createContact.service";

export const createContactController = async (req: Request, res: Response) => {
  const { name, email, phone } = req.body;
  const { clientId } = req.params;

  const client = await createContactService({ name, email, phone, clientId });

  return res.status(201).json(client);
};
