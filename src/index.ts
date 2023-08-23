import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import allRoutes from './routes';

dotenv.config();

const app = express();

const corsOptions = {
    origin: '*'
}

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api", allRoutes);


export default app;



