import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AuthRequest, UserPayload } from "../types";

const JWT_SECRET = process.env.JWT_SECRET || "tu-secreto-super-seguro-cambialo";

export const authenticate = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    // Obtener token del header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      res.status(401).json({
        ok: false,
        message: "No token, autorización denegada",
      });
      return;
    }

    const token = authHeader.substring(7); // Remover "Bearer "

    // Verificar token
    const decoded = jwt.verify(token, JWT_SECRET) as UserPayload;

    // Agregar usuario al request
    req.user = {
      id: decoded.id,
      email: decoded.email,
      role: decoded.role,
    };

    next();
  } catch (error: any) {
    if (error.name === "JsonWebTokenError") {
      res.status(401).json({
        ok: false,
        message: "Token inválido",
      });
      return;
    }

    if (error.name === "TokenExpiredError") {
      res.status(401).json({
        ok: false,
        message: "Token expirado",
      });
      return;
    }

    res.status(500).json({
      ok: false,
      message: "Error del servidor",
    });
  }
};

// Middleware para verificar roles
export const authorize = (...roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      res.status(401).json({
        ok: false,
        message: "No autenticado",
      });
      return;
    }

    if (!roles.includes(req.user.role || "")) {
      res.status(403).json({
        ok: false,
        message: "No tienes permiso para acceder a este recurso",
      });
      return;
    }

    next();
  };
};