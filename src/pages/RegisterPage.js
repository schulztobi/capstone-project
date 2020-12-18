import useForm from '../hooks/useForm';
import registerUser from '../services/registerUser';
import { useState } from 'react';
import styled from 'styled-components/macro';
import { Redirect } from 'react-router-dom';
import {
  StyledContainer,
  Styledform,
  StyledContent,
  StyledY,
  StyledButton,
  StyledInput,
  StyledBackgroundModal,
  StyledModal,
} from '../styles/ReusableStyledComponents';

export default function RegisterPage() {
  const { inputs, handleInputChange, handleSubmit } = useForm(
    {
      username: '',
      email: '',
      password: '',
    },
    submitForm
  );

  const [isSuccess, setIsSuccess] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userExist, setUserExist] = useState(false);

  function submitForm() {
    registerUser(inputs)
      .then((result) => {
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
      <StyledContainer>
        <StyledContent>
          <h1>I Dare</h1>
          <StyledY>You</StyledY>
          <p>create an account</p>
        </StyledContent>
        <Styledform onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            name="username"
            onChange={handleInputChange}
            placeholder={'Username'}
            autoComplete="off"
          />
          <StyledInput
            type="email"
            name="email"
            onChange={handleInputChange}
            placeholder={'Email'}
            autoComplete="off"
          />
          <StyledInput
            type="password"
            name="password"
            onChange={handleInputChange}
            placeholder={'Password'}
          />
          <StyledButton>Sign Up</StyledButton>
        </Styledform>
        {isSuccess && (
          <StyledBackgroundModal>
            <StyledModal>
              <p>Sign Up successful</p>
              <StyledButton onClick={() => setIsRegistered(true)}>
                I Dare
              </StyledButton>
            </StyledModal>
          </StyledBackgroundModal>
        )}
        {isRegistered && <Redirect to="/login" />}

        {userExist && (
          <StyledBackgroundModal>
            <StyledModal>
              <p>User or email taken!</p>
              <StyledButton onClick={() => setIsError(true)}>
                I Pussy Out
              </StyledButton>
            </StyledModal>
          </StyledBackgroundModal>
        )}
        {isError && <Redirect to="/" />}
      </StyledContainer>
    </>
  );
}
