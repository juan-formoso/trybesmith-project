import jwt from 'jsonwebtoken';
import Login from '../interfaces/Login';
import Token from '../interfaces/Token';
import loginModel from '../models/login';

const loginUser = async (login: Login): Promise<Token> => {
  const user = await loginModel.loginUser(login);
  if (!user) {
    const error = new Error();
    error.message = 'Username or password invalid';
    throw error;
  }
  const secret = process.env.JWT_SECRET || 'any_secret';
  const token = jwt.sign({ userId: user.id }, secret);
  return { token };
};

export default { loginUser };
