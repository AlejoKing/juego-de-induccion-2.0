import express from 'express'
import morgan from 'morgan'


import { createRol } from "./libs/initialSetup";

import authRoutes from "./routes/auth.routes";

const app = express()
createRol();


app.use(express.json());

app.use(morgan('dev'));

app.use('/auth',authRoutes)

export default app;