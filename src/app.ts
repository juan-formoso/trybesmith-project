import express from 'express';
import routes from './routes/index';
import error from './middlewares/error';
import loginValidation from './middlewares/loginValidation';

const app = express();

app.use(express.json());
app.use(routes);
app.use(error);
app.use(loginValidation);

export default app;
