import { AppDataSource } from "../data-source";
import { Client } from "../entities/client.entity";
import { IClient } from "../interfaces/client";
import { AppError } from "../errors/appError";

const removeClientService = async (id: string): Promise<void> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOneBy({ id: id });

  if (!client) {
    throw new AppError("Client not found");
  }

  await clientRepository.delete(client!.id);

  return;
};

export default removeClientService;
