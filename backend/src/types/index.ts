import { Request } from "express";

//  Extender Request para incluir user 
export interface AuthRequest extends Request {
    user?: {
        id: string;
        email: string;
        role?: string;
    };
}

//  Tipos para auth
export interface RegisterDTO {
    email: string;
    password: string;
    name: string;
}

export interface LoginDTO {
    email: string;
    password: string;
}

export interface UserPayload {
    id: string;
    email: string;
    role?: string;
}