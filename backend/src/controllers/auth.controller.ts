import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User";
import { RegisterDTO, LoginDTO } from "../types";

const JWT_SECRET = process.env.JWT_SECRET || "tu-secreto-super-seguro-cambialo";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";

if (!process.env.JWT_SECRET) {
  console.warn("⚠️  JWT_SECRET no está definido en .env, usando valor por defecto");
}

// Generar JWT
const generateToken = (userId: string, email: string, role?: string): string => {
  const token = jwt.sign(
    { id: userId, email, role }, 
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
  return token;
};

// Register
export const register = async (req: Request, res: Response): Promise<void> => {
  const { email, password, name } = req.body as RegisterDTO;

  // Validaciones básicas
  if (!email || !password || !name) {
    res.status(400).json({
      ok: false,
      message: "Email, password y nombre son requeridos",
    });
    return;
  }

  // Verificar si el usuario ya existe
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400).json({
      ok: false,
      message: "El usuario ya existe",
    });
    return;
  }

  // Crear usuario
  const user = await User.create({
    email,
    password,
    name,
  });

  // Generar token
  const token = generateToken(user._id.toString(), user.email, user.role);

  res.status(201).json({
    ok: true,
    message: "Usuario registrado exitosamente",
    data: {
      user: {
        id: user._id.toString(),
        email: user.email,
        name: user.name,
        role: user.role,
      },
      token,
    },
  });
};

// Login
export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body as LoginDTO;

  // Validaciones básicas
  if (!email || !password) {
    res.status(400).json({
      ok: false,
      message: "Email y password son requeridos",
    });
    return;
  }

  // Buscar usuario (incluir password)
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    res.status(401).json({
      ok: false,
      message: "Credenciales inválidas",
    });
    return;
  }

  // Verificar password
  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) {
    res.status(401).json({
      ok: false,
      message: "Credenciales inválidas",
    });
    return;
  }

  // Verificar si está activo
  if (!user.isActive) {
    res.status(401).json({
      ok: false,
      message: "Usuario inactivo",
    });
    return;
  }

  // Generar token
  const token = generateToken(user._id.toString(), user.email, user.role);

  res.json({
    ok: true,
    message: "Login exitoso",
    data: {
      user: {
        id: user._id.toString(),
        email: user.email,
        name: user.name,
        role: user.role,
      },
      token,
    },
  });
};

// Get Profile (ruta protegida de ejemplo)
export const getProfile = async (req: Request, res: Response): Promise<void> => {
  const userId = (req as any).user?.id;

  const user = await User.findById(userId);
  if (!user) {
    res.status(404).json({
      ok: false,
      message: "Usuario no encontrado",
    });
    return;
  }

  res.json({
    ok: true,
    data: {
      user: {
        id: user._id.toString(),
        email: user.email,
        name: user.name,
        role: user.role,
        isActive: user.isActive,
        createdAt: user.createdAt,
      },
    },
  });
};