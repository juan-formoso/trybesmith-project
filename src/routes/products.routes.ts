import { Router } from 'express';
import productsController from '../controllers/products';
import auth from '../middlewares/auth';

const productsRouter = Router();

productsRouter.post('/', auth, productsController.createProduct);

export default productsRouter;
