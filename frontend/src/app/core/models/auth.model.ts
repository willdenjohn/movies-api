export interface LoginRequest {
  usuario: string;
  senha: string;
}

export interface LoginResponse {
  message: string;
  token: string;
  expiresIn: string;
  tokenType: string;
}

export interface User {
  usuario: string;
}