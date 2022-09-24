import { AppDataSource } from "../data-source";
import { Client } from "../entities/client.entity";
import { Contact } from "../entities/contact.entity";
import { AppError } from "../errors/appError";
import { IContact } from "../interfaces/contact";

const createContactService = async ({
  name,
  email,
  phone,
  clientId,
}: IContact): Promise<Contact> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOne({ where: { id: clientId } });

  if (!client) {
    throw new AppError("Client not found", 404);
  }

  const contact = new Contact();

  contact.name = name;
  contact.email = email;
  contact.phone = phone;
  contact.client = client;

  contactRepository.create(contact);
  await contactRepository.save(contact);

  return contact;
};

export default createContactService;
