import { JwtPayload } from 'jsonwebtoken';

interface Payload extends JwtPayload {
  id: number;
}

export default Payload;
