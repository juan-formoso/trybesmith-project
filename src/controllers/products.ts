import { Request, Response } from 'express';
import { Product } from '../interfaces/Product';
import Schemas from '../middlewares/schemas';
import validationJoi from '../middlewares/joiValidation';
import productsServices from '../services/products';
import 'express-async-errors';

const createProduct = async (req: Request, res: Response): Promise<void> => {
  validationJoi(Schemas.productSchema, req.body);
  const { name, amount } = req.body;
  const product: Product = { name, amount };
  const id = await productsServices.createProduct(product);
  res.status(201).json({ id });
};

export default { createProduct };
