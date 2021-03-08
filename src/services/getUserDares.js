import { loadToken } from './tokenStorage';

export default function getUserDares() {
  const dareCreator = fetch('http://localhost:4000/app/createdDaresByUser', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'auth-token': loadToken(),
    },
  }).then(res => res.json());
  const daredUser = fetch('http://localhost:4000/app/showAllDaresToUser', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'auth-token': loadToken(),
    },
  }).then(res => res.json());
  return Promise.all([dareCreator, daredUser]);
}
