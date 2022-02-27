import { Request, Response } from 'express';
import usersService from '../services/users';
import User from '../interfaces/User';
import Token from '../interfaces/Token';
import validationJoi from '../middlewares/joiValidation';
import Schemas from '../middlewares/schemas';
import 'express-async-errors';

const createUser = async (req: Request, res: Response): Promise<Response> => {
  validationJoi(Schemas.userSchema, req.body);
  const user: User = req.body;
  const token: Token = await usersService.createUser(user);
  return res.status(201).json(token);
};

export default { createUser };
