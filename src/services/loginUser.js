export default function logInUser(data) {
  return fetch('http://localhost:4000/app/login', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(response => response.json());
}
