import express from 'express';
import usersRouter from './routes/users';
import error from './middlewares/error';

const app = express();
app.use(express.json());

app.use('/users', usersRouter);
app.use(error);

export default app;
