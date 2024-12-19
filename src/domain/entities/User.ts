import { Column, PrimaryGeneratedColumn, Entity, OneToMany } from "typeorm";
import { Group } from "./Group";
import { Participant } from "./Participant";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Group, (group) => group.owner)
  groups: Group[]; 

  @OneToMany(() => Participant, (participant) => participant.user)
  participants: Participant[];

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
