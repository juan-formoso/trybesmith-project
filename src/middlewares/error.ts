import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const error = (err: unknown, req: Request, res: Response, _next: NextFunction) => {
  if (Joi.isError(err)) {
    if (err?.details[0].type === 'any.required') {
      return res.status(400).json({
        error: err.message,
      });
    }
    return res.status(422).json({ error: err.message });
  }
};

export default error;
