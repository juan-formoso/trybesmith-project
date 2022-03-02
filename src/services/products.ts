import { Product, ProductId, NewProduct } from '../interfaces/Product';
import productsModel from '../models/products';

const createProduct = async (product: Product):Promise<NewProduct> => {
  const createdProduct = await productsModel.createProduct(product);
  const insertId: ProductId = { id: createdProduct, ...product };
  return {
    item: insertId,
  };
};

export default { createProduct };
