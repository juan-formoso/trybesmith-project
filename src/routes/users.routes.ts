import { Router } from 'express';
import usersController from '../controllers/users';

const usersRouter = Router();

usersRouter.post('/', usersController.createUser);

export default usersRouter;
