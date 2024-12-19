import { UserRepository } from "../../domain/repositories/UserRepository";
import { HashProvider } from "../providers/HashProvider";

interface CreateUserInput {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export class CreateUser {
  constructor(
    private userRepository: UserRepository,
    private hashProvider: HashProvider
  ) {}

  async execute(input: CreateUserInput): Promise<string> {
    if (input.password != input.confirmPassword) {
      throw new Error("As senhas não coincidem.");
    }

    const existingUser = await this.userRepository.findByEmail(input.email);
    if (existingUser) {
      throw new Error("Este email já está sendo utilizado.");
    }

    const hashedPassword = await this.hashProvider.hash(input.password);
    return this.userRepository.create({ ...input, password: hashedPassword });
  }
}
