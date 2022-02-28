import Joi from 'joi';

const userSchema = Joi.object().keys({
  username: Joi.string().min(3).required().messages({
    'string.base': 'Username must be a string',
    'string.min': 'Username must be longer than 2 characters',
    'any.required': 'Username is required',
  }),
  classe: Joi.string().min(3).required().messages({
    'string.base': 'Classe must be a string',
    'string.min': 'Classe must be longer than 2 characters',
    'any.required': 'Classe is required',
  }),
  level: Joi.number().strict().positive().required()
    .messages({
      'number.base': 'Level must be a number',
      'number.positive': 'Level must be greater than 0',
      'any.required': 'Level is required',
    }),
  password: Joi.string().min(8).required().messages({
    'string.base': 'Password must be a string',
    'string.min': 'Password must be longer than 7 characters',
    'any.required': 'Password is required',
  }),
});

const loginSchema = Joi.object().keys({
  username: Joi.string().required().messages({
    'string.base': 'Username must be a string',
    'any.required': 'Username is required',
  }),
  password: Joi.string().required().messages({
    'string.base': 'Password must be a string',
    'any.required': 'Password is required',
  }),
});

const productSchema = Joi.object().keys({
  name: Joi.string().min(3).required().messages({
    'string.base': 'Name must be a string',
    'string.min': 'Name must be longer than 2 characters',
    'any.required': 'Name is required',
  }),
  amount: Joi.string().min(3).required().messages({
    'string.base': 'Amount must be a string',
    'string.min': 'Amount must be longer than 2 characters',
    'any.required': 'Amount is required',
  }),
});

export default { userSchema, loginSchema, productSchema };
