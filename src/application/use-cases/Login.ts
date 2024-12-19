import { UserRepository } from "../../domain/repositories/UserRepository";
import { HashProvider } from "../providers/HashProvider";
import { TokenProvider } from "../providers/TokenProvider";

interface LoginRequest {
    email: string,
    password: string
}

interface LoginResponse {
    name: string;
    accessToken: string;
    refreshToken: string;
  }

export class Login {
    constructor(
        private userRepository: UserRepository,
        private hashProvider: HashProvider,
        private tokenProvider: TokenProvider
    ) {}

    async execute(input: LoginRequest): Promise<LoginResponse> {
        const existingUser = await this.userRepository.findByEmail(input.email);
        if (!existingUser) {
            throw new Error("Não existe nenhum usuário com esse email.");
        }

        const verifyPassword = this.hashProvider.compare(existingUser.password, input.password)

        if (!verifyPassword) {
            throw new Error("Usuário ou senha incorretos.")
        }

        const accToken = this.tokenProvider.generateToken(input, "15m");
        const refToken = this.tokenProvider.generateToken(input, "3d");

        return { name: existingUser.name, accessToken: accToken, refreshToken: refToken };
    }
}