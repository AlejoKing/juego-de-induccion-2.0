import express from 'express'
import morgan from 'morgan'


import { createRol } from "./libs/initialSetup";

import authRoutes from "./routes/auth.routes";
import userRoutes from './routes/user.routes';

const app = express()
createRol();


app.use(express.json());

app.use(morgan('dev'));

app.use('/auth',authRoutes)
app.use('/user',userRoutes)

export default app;