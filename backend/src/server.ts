import dotenv from "dotenv";
dotenv.config()
import mongoose from "mongoose";
import app from "./app";

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/embarkids";

async function start() {
    try{
        //  intentamos conectar a mongo
        await mongoose.connect(MONGO_URI);
        console.log("Mongo conectado");
    } catch (error) {
        console.warn("Mongo Connection failed", (error as any).message ?? error);
    }

    app.listen(PORT, () => {
        console.log("Servidor escuchando en el puerto", PORT);
    })

}

start();