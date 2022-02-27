import connection from './connection';
import User from '../interfaces/User';
import Login from '../interfaces/Login';

const loginUser = async (login: Login): Promise<User> => {
  const { username, password } = login;
  const [user] = await connection.execute(
    'SELECT * FROM Trybesmith.Users AS u WHERE u.username = ? AND u.password = ?', 
    [username, password],
  );
  const [userData] = user as User[];
  return userData;
};

export default { loginUser };
