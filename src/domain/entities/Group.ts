import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { User } from "./User";
import { Participant } from "./Participant";

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column()
  ownerId: number

  @ManyToOne(() => User, (user) => user.groups)
  @JoinColumn({ name: "ownerId" })
  owner: User;

  @OneToMany(() => Participant, (participant) => participant.group)
  participants: Participant[];
}
