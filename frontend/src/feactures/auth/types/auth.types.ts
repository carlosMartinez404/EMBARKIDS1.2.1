// auth.types.ts

// Request para login
export interface LoginRequest {
  email: string;
  password: string;
}

// Request para registro
export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
}

// Información del usuario
export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

// Respuesta de la API para login o registro exitoso o fallido
export interface AuthResponse {
  ok: boolean; // true si fue exitoso, false si hubo error
  message: string; // mensaje de éxito o error
  data: {
    user: User;
    token: string;
  };
}

// Error de autenticación (opcional, puede tener lista de errores)
export interface AuthError {
  ok: boolean;
  message: string;
  errors?: string[];
}
