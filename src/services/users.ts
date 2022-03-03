import jwt from 'jsonwebtoken';
import User from '../interfaces/User';
import Token from '../interfaces/Token';
import usersModel from '../models/users';

const createUser = async (user: User): Promise<Token> => {
  await usersModel.createUser(user); 
  const secret = process.env.JWT_SECRET || 'any_secret';
  const token = jwt.sign({ userId: user.id }, secret);
  return { token };
};

export default { createUser };
