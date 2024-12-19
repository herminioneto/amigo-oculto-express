export interface GroupRepository {
  create(group: { name: string; ownerId: string }): Promise<string>;
  findById(
    groupId: string
  ): Promise<{ id: string; name: string; ownerId: string } | null>;
  listByUser(
    userId: string
  ): Promise<{ id: string; name: string; ownerId: string }[]>;
}
