import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";
import { Group } from "./Group";

@Entity()
export class Participant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  groupId: number;

  @Column({ nullable: true })
  secretFriendId?: number;

  @ManyToOne(() => User, (user) => user.participants)
  @JoinColumn({ name: "userId" })
  user: User;

  @ManyToOne(() => Group, (group) => group.participants)
  @JoinColumn({ name: "groupId" })
  group: Group;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: "secretFriendId" })
  secretFriend: User;
}
