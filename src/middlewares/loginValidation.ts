import { NextFunction, Request, Response } from 'express';

const loginValidation = (err:Error, _req:Request, res:Response, next: NextFunction) => {
  if (err.message === 'Username or password invalid') {
    return res.status(401).json({ error: err.message });
  }
  next(err);
};

export default loginValidation;
