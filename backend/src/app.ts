import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import "express-async-errors";


const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => res.json({ok: true, message: "API running"}));

//  Ruta de ejemplo
app.get("/api/hello", (req, res) => res.json({ Hello: "mundo"}))

export default app;