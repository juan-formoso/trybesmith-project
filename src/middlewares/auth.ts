import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import Payload from '../interfaces/Payload';
import 'express-async-errors';

const auth = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: 'Token not found' });
  }
  const secret = process.env.JWT_SECRET || 'any_secret';
  const { id } = verify(authorization, secret) as Payload;
  if (!id) {
    return res.status(401).json({ error: 'Invalid token' });
  }
  next();
};

export default auth;
