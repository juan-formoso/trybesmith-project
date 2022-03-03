import { Router } from 'express';
import productsController from '../controllers/products';
import auth from '../middlewares/auth';

const productsRouter = Router();

productsRouter.post('/', auth, productsController.createProduct);
productsRouter.get('/', auth, productsController.getProducts);

export default productsRouter;
