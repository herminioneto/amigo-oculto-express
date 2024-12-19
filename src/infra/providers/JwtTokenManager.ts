import jwt from "jsonwebtoken";
import {
  TokenPayload,
  TokenProvider,
} from "../../application/providers/TokenProvider";

export class JwtTokenManager implements TokenProvider {
  private secretKey: string;

  constructor(secretKey: string) {
    if (!secretKey) {
      throw new Error("Uma chave secreta deve ser provida.");
    }
    this.secretKey = secretKey;
  }

  generateToken(payload: TokenPayload, expiresIn: string | number): string {
    return jwt.sign(payload, this.secretKey, { expiresIn });
  }

  verifyToken(token: string): TokenPayload {
    try {
      return jwt.verify(token, this.secretKey) as TokenPayload;
    } catch (error) {
      throw new Error("Token expirado ou inválido.");
    }
  }
}
