import { Button } from '@material-ui/core';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import useForm from '../hooks/useForm';
import loginUser from '../services/loginUser';
import { saveToken } from '../services/tokenStorage';

export default function LoginPage() {
  const { inputs, handleInputChange, handleSubmit } = useForm(
    {
      username: '',
      password: '',
    },
    submitForm,
  );

  const [loggedIn, setLoggedIn] = useState(false);
  const [wrongData, setWrongData] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  function submitForm() {
    loginUser(inputs)
      .then(result => {
        if (result.message !== 'success') {
          setWrongData(true);
        } else {
          saveToken(result.token);
          setIsSuccess(true);
        }
      })
      .catch(() => setWrongData(true));
  }

  return (
    <>
      <div>
        <div>
          <h1>I Dare</h1>
          <div>You</div>
          <p>enter an account</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            onChange={handleInputChange}
            placeholder="Username"
            value={inputs.username}
            autoComplete="off"
          />
          <input
            type="password"
            name="password"
            onChange={handleInputChange}
            placeholder="Password"
            value={inputs.password}
          />
          <Button>Login</Button>
        </form>
        {isSuccess && (
          <div>
            <div>
              <p>Login successful</p>
              <Button onClick={() => setLoggedIn(true)}>I Dare</Button>
            </div>
          </div>
        )}
        {loggedIn && <Redirect to="/DaresPage" />}
        {wrongData && (
          <div>
            <div>
              <p>User or Password wrong</p>
              <Button onClick={() => setIsError(true)}>I Pussy out</Button>
            </div>
          </div>
        )}
        {isError && <Redirect to="/" />}
      </div>
    </>
  );
}
