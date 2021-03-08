export default function registerUser(data) {
  return fetch('http://localhost:4000/app/register', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(response => response.json());
}
