import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import useForm from '../hooks/useForm';
import loginUser from '../services/loginUser';
import { saveToken } from '../services/tokenStorage';
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
      <StyledContainer>
        <StyledContent>
          <h1>I Dare</h1>
          <StyledY>You</StyledY>
          <p>enter an account</p>
        </StyledContent>
        <Styledform onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            name="username"
            onChange={handleInputChange}
            placeholder="Username"
            value={inputs.username}
            autoComplete="off"
          />
          <StyledInput
            type="password"
            name="password"
            onChange={handleInputChange}
            placeholder="Password"
            value={inputs.password}
          />
          <StyledButton>Login</StyledButton>
        </Styledform>
        {isSuccess && (
          <StyledBackgroundModal>
            <StyledModal>
              <p>Login successful</p>
              <StyledButton onClick={() => setLoggedIn(true)}>
                I Dare
              </StyledButton>
            </StyledModal>
          </StyledBackgroundModal>
        )}
        {loggedIn && <Redirect to="/DaresPage" />}
        {wrongData && (
          <StyledBackgroundModal>
            <StyledModal>
              <p>User or Password wrong</p>
              <StyledButton onClick={() => setIsError(true)}>
                I Pussy out
              </StyledButton>
            </StyledModal>
          </StyledBackgroundModal>
        )}
        {isError && <Redirect to="/" />}
      </StyledContainer>
    </>
  );
}
