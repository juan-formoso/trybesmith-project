import jwt from 'jsonwebtoken';
import Login from '../interfaces/Login';
import Token from '../interfaces/Token';
import loginModel from '../models/login';

const loginUser = async (login: Login): Promise<Token> => {
  const user = await loginModel.loginUser(login);
  if (!user) {
    throw new Error('Invalid username or password');
  }
  const secret = process.env.JWT_SECRET || 'secret';
  const token = jwt.sign({ id: user.id }, secret);
  return { token };
};

export default { loginUser };
