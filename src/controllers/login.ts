import { Request, Response } from 'express';
import loginServices from '../services/login';
import Login from '../interfaces/Login';
import Token from '../interfaces/Token';
import Schemas from '../middlewares/schemas';
import validationJoi from '../middlewares/joiValidation';
import 'express-async-errors';

const loginUser = async (req: Request, res: Response): Promise<Response> => {
  validationJoi(Schemas.loginSchema, req.body);
  const login: Login = req.body;
  const token: Token = await loginServices.loginUser(login);
  return res.status(200).json(token);
};

export default { loginUser };
