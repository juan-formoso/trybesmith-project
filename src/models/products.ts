import { ResultSetHeader } from 'mysql2';
import { Product } from '../interfaces/Product';
import connection from './connection';

const createProduct = async (product: Product): Promise<number> => {
  const [rows] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [product.name, product.amount],
  );
  const { insertId } = rows;
  return insertId;
};

export default { createProduct };
