export default function getDares() {
  return fetch('http://localhost:4000/dares', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => data);
}
