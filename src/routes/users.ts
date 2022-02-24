import { Router } from 'express';
import usersController from '../controllers/users';

const router = Router();

router.post('/', usersController.createUser);

export default router;
