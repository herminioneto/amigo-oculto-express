export interface TokenPayload {
  [key: string]: any;
}

export interface TokenProvider {
  generateToken(payload: TokenPayload, expiresIn: string | number): string;
  verifyToken(token: string): TokenPayload;
}
