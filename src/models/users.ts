import connection from './connection';
import User from '../interfaces/User';

// Crie uma função que adiciona um usuário à tabela
const createUser = async (user: User) => {
  const result = await connection.execute(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
    [user.username, user.classe, user.level, user.password],
  );
  return result;
};

export default { createUser };
