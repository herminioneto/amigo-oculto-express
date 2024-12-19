export interface ParticipantRepository {
  add(participant: { userId: string; groupId: string }): Promise<string>;
  findByGroup(
    groupId: string
  ): Promise<
    {
      id: string;
      userId: string;
      groupId: string;
      secretFriendId: string | null;
    }[]
  >;
  updateSecretFriend(
    participantId: string,
    secretFriendId: string
  ): Promise<void>;
}
