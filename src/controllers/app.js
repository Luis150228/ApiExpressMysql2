import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { options } from '../swaggerOptions';
import trasladosRoutes from '../routes/traslados.routes'; ///trasladosRoutes fue creado aleatoriamente
import usersRoutes from '../routes/user.routes';
import authRoutes from '../routes/auth.routes';

const specs = swaggerJSDoc(options);

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
	res.json({
		author: 'Rangel Diaz Luis Fernando',
		name: 'Sistema de Traslados',
		version: '0.1.0',
	});
});
app.use('/api/traslados', trasladosRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/auth', authRoutes);

app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

export default app;
