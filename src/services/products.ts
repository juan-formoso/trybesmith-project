import { Product, ProductId, NewProduct } from '../interfaces/Product';
import productsModel from '../models/products';

const createProduct = async (product: Product): Promise<NewProduct> => {
  const insertId = await productsModel.createProduct(product); 
  const createdProduct: ProductId = { id: insertId, ...product };
  return {
    item: createdProduct,
  };
};

const getProducts = async (): Promise<Product[]> => {
  const allProducts = await productsModel.getProducts();
  return allProducts;
};

export default { createProduct, getProducts };
