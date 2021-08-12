import express from 'express';
import trasladosRoutes from '../routes/traslados'; ///trasladosRoutes fue creado aleatoriamente
import cors from 'cors';
import morgan from 'morgan';

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(trasladosRoutes);

export default app;
