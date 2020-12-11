import Header from '../components/Header';
import useForm from '../hooks/useForm';
import loginUser from '../services/loginUser';
import { useState } from 'react';
import { saveToken } from '../services/tokenStorage';
export default function LoginPage() {
  const { inputs, handleInputChange, handleSubmit } = useForm(
    {
      username: '',
      password: '',
    },
    submitForm
  );

  const [isError, setIsError] = useState(false);

  function submitForm() {
    loginUser(inputs)
      .then((result) => {
        if (result.message !== 'success') {
          setIsError(true);
        } else {
          saveToken(result.token);
        }
      })
      .catch(() => setIsError(true));
  }

  return (
    <>
      <Header title="LoginPage" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          onChange={handleInputChange}
          placeholder={'Username'}
          value={inputs.username}
        />
        <input
          type="password"
          name="password"
          onChange={handleInputChange}
          placeholder={'Password'}
          value={inputs.password}
        />
        <button>Login</button>
      </form>
      {isError && <p>Try again</p>}
    </>
  );
}
