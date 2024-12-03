import express from "express";
import dotenv from "dotenv";
import promocionRoutes from "./routes/promocionRoutes"; 
import cors from "cors"; 

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/promociones/", promocionRoutes);

export default app;
