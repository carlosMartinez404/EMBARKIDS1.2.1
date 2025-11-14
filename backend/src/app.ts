import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import "express-async-errors";

// Routes
import authRoutes from "./routes/auth.routes";

// Middlewares
import { errorHandler, notFound } from "./middlewares/error.middleware";

const app = express();

// Security & parsing
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Health check
app.get("/", (req, res) => res.json({ ok: true, message: "API running" }));

// API Routes
app.use("/api/auth", authRoutes);

// Error handlers (deben ir al final)
app.use(notFound);
app.use(errorHandler);

export default app;