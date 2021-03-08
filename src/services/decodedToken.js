import jwt_decode from 'jwt-decode';
import { loadToken } from './tokenStorage';

const token = loadToken();
const decodedToken = jwt_decode(token);

export { decodedToken };
