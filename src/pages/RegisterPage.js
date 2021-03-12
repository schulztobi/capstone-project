import { useState } from 'react';
import styled from 'styled-components/macro';
import { Redirect } from 'react-router-dom';
import registerUser from '../services/registerUser';
import useForm from '../hooks/useForm';

export default function RegisterPage() {
  const { inputs, handleInputChange, handleSubmit } = useForm(
    {
      username: '',
      email: '',
      password: '',
    },
    submitForm,
  );

  const [isSuccess, setIsSuccess] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userExist, setUserExist] = useState(false);

  function submitForm() {
    registerUser(inputs)
      .then(result => {
        if (result.message === 'success') {
          setIsSuccess(true);
        } else if (result.message === 'User or email already taken') {
          setUserExist(true);
        }
      })
      .catch(() => setUserExist(false));
  }

  return (
    <>
      <div>
        <div>
          <h1>I Dare</h1>
          <div>You</div>
          <p>create an account</p>
        </div>
        <div onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            onChange={handleInputChange}
            placeholder="Username"
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            onChange={handleInputChange}
            placeholder="Email"
            autoComplete="off"
          />
          <input
            type="password"
            name="password"
            onChange={handleInputChange}
            placeholder="Password"
          />
        </div>
        {isSuccess && (
          <div>
            <div>
              <p>Sign Up successful</p>
            </div>
          </div>
        )}
        {isRegistered && <Redirect to="/login" />}

        {userExist && (
          <div>
            <div>
              <p>User or email taken!</p>
            </div>
          </div>
        )}
        {isError && <Redirect to="/" />}
      </div>
    </>
  );
}
