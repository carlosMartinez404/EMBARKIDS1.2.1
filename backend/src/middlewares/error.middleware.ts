import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("Error:", error);

  // Error de Mongoose - Duplicate key
  if (error.code === 11000) {
    const field = Object.keys(error.keyPattern)[0];
    res.status(400).json({
      ok: false,
      message: `El ${field} ya existe`,
    });
    return;
  }

  // Error de validación de Mongoose
  if (error.name === "ValidationError") {
    const messages = Object.values(error.errors).map((err: any) => err.message);
    res.status(400).json({
      ok: false,
      message: "Error de validación",
      errors: messages,
    });
    return;
  }

  // Error de Cast (ID inválido)
  if (error.name === "CastError") {
    res.status(400).json({
      ok: false,
      message: "ID inválido",
    });
    return;
  }

  // Error genérico
  res.status(error.status || 500).json({
    ok: false,
    message: error.message || "Error del servidor",
  });
};

// 404 handler
export const notFound = (req: Request, res: Response) => {
  res.status(404).json({
    ok: false,
    message: "Ruta no encontrada",
  });
};