import express from 'express';
import trasladosRoutes from '../routes/traslados'; ///trasladosRoutes fue creado aleatoriamente

const app = express();
app.use(express.json());
app.use(trasladosRoutes);

export default app;
