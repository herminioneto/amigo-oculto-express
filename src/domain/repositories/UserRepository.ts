export interface UserRepository {
  create(user: {
    name: string;
    email: string;
    password: string;
  }): Promise<string>;
  findByEmail(
    email: string
  ): Promise<{
    id: string;
    name: string;
    email: string;
    password: string;
  } | null>;
}
