import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Client } from "./client.entity";

@Entity("contacts")
export class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50, nullable: true })
  email: string;

  @Column({ length: 20, nullable: true })
  phone: string;

  // @ManyToOne(() => Client, { onDelete: "CASCADE" })
  // @JoinColumn()
  // client: Client;

  @ManyToOne(() => Client, (client) => client.contacts, { onDelete: "CASCADE" })
  client: Client;
}
