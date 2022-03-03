import { ResultSetHeader } from 'mysql2';
import { Product, ProductId } from '../interfaces/Product';
import connection from './connection';

const createProduct = async (product: Product): Promise<number> => {
  const [rows] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [product.name, product.amount],
  );
  const { insertId } = rows;
  return insertId;
};

const getProducts = async ():Promise<ProductId[]> => {
  const [result] = await connection.execute('SELECT * FROM Trybesmith.Products;');
  const allProducts = result as ProductId[];
  return allProducts;
};

export default { createProduct, getProducts };
