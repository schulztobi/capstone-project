import Header from '../components/Header';
import useForm from '../hooks/useForm';
import registerUser from '../services/registerUser';
import { useState } from 'react';

export default function RegisterPage() {
  const { inputs, handleInputChange, handleSubmit } = useForm(
    {
      username: '',
      email: '',
      password: '',
    },
    submitForm
  );

  const [isRegistered, setIsRegistered] = useState(false);
  const [isError, setIsError] = useState(false);

  function submitForm() {
    registerUser(inputs)
      .then((result) => {
        if (result.message === 'success') {
          setIsRegistered(true);
          setIsError(false);
        } else if (result.message === 'User or email already taken') {
          setIsError(true);
        }
      })
      .catch(() => setIsError(false));
  }

  return (
    <>
      <Header title="RegisterPage" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          onChange={handleInputChange}
          placeholder={'Username'}
        />
        <input
          type="email"
          name="email"
          onChange={handleInputChange}
          placeholder={'email'}
        />
        <input
          type="password"
          name="password"
          onChange={handleInputChange}
          placeholder={'password'}
        />
        <button>Register</button>
      </form>
      {isRegistered && <p>You have registered succesful</p>}
      {isError && <p>User or email already exists</p>}
    </>
  );
}
