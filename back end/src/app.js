import express from 'express'
import morgan from 'morgan'


import authRoutes from "./routes/auth.routes";

const app = express()


app.use(express.json());

app.use(morgan('dev'));

app.use('/auth',authRoutes)

export default app;