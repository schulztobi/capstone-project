import jwt_decode from 'jwt-decode';
import { loadToken } from '../services/tokenStorage';

const token = loadToken();
const decodedToken = jwt_decode(token);

export { decodedToken };
