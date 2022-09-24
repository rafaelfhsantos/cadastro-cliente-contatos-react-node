import { AppDataSource } from "../data-source";
import { Client } from "../entities/client.entity";
import { IClient } from "../interfaces/client";
import { AppError } from "../errors/appError";

const createClientService = async ({
  name,
  email,
  phone,
}: IClient): Promise<Client> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const clients = await clientRepository.find();

  const emailAlreadyExist = clients.find((client) => client.email === email);

  if (emailAlreadyExist) {
    throw new AppError("Email already exists");
  }

  const client = new Client();

  // const hashedPassword = await hash(password, 10);

  client.name = name;
  client.email = email;
  client.phone = phone;

  clientRepository.create(client);
  await clientRepository.save(client);

  return client;
};

export default createClientService;
