import { Request, Response } from 'express';
import { Product } from '../interfaces/Product';
import Schemas from '../middlewares/schemas';
import validationJoi from '../middlewares/joiValidation';
import productsServices from '../services/products';
import 'express-async-errors';

const createProduct = async (req: Request, res: Response): Promise<Response> => {
  validationJoi(Schemas.productSchema, req.body);
  const product: Product = req.body;
  const id = await productsServices.createProduct(product);
  return res.status(201).json(id);
};

export default { createProduct };
