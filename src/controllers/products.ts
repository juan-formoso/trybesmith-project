import { Request, Response } from 'express';
import { Product } from '../interfaces/Product';
import validationJoi from '../middlewares/joiValidation';
import Schemas from '../middlewares/schemas';
import productsServices from '../services/products';

const createProduct = async (req: Request, res: Response): Promise<Response> => {
  validationJoi(Schemas.productSchema, req.body);
  const product: Product = req.body;
  const id = await productsServices.createProduct(product);
  return res.status(201).json(id);
};

const getProducts = async (_req: Request, res: Response) => {
  const allProducts = await productsServices.getProducts();
  res.status(200).json(allProducts);
};

export default { createProduct, getProducts };
