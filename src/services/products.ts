import { Product, ProductId, ProductList } from '../interfaces/Product';
import productsModel from '../models/products';

const createProduct = async (product: Product):Promise<ProductList> => {
  const createdProduct = await productsModel.createProduct(product); 
  const insertId: ProductId = { id: createdProduct, ...product };
  return {
    item: insertId,
  };
};

export default { createProduct };
