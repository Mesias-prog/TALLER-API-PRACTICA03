import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import empleadosRoutes from './routes/empleados.routes.js';

const app = express();

app.set('puerto', process.env.PORT || 3000);
app.set('nombreApp', 'Gestión de empleados');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1', empleadosRoutes);

export default app;
