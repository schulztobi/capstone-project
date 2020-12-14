import useForm from '../hooks/useForm';
import loginUser from '../services/loginUser';
import { useState } from 'react';
import { saveToken } from '../services/tokenStorage';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components/macro';

export default function LoginPage() {
  const { inputs, handleInputChange, handleSubmit } = useForm(
    {
      username: '',
      password: '',
    },
    submitForm
  );

  const [loggedIn, setLoggedIn] = useState(false);
  const [wrongData, setWrongData] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  function submitForm() {
    loginUser(inputs)
      .then((result) => {
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
            placeholder={'Username'}
            value={inputs.username}
            autoComplete="off"
          />
          <StyledInput
            type="password"
            name="password"
            onChange={handleInputChange}
            placeholder={'Password'}
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
const StyledContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  position: relative;
`;

const Styledform = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledContent = styled.div`
  color: #fff;

  h1 {
    font-size: 70px;
    margin: 50px 0 70px;
    line-height: 0px;
  }
`;

const StyledY = styled.h2`
  font-size: 110px;
  margin: 0 0 100px;
  line-height: 0;
`;

const StyledButton = styled.button`
  color: #fbfcfd;
  background: transparent;
  border: 1px solid #fbfcfd;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  padding: 10px 25px;
  margin: 5px;
`;

const StyledInput = styled.input`
  color: #fbfcfd;
  background: transparent;
  border: 1px solid #fbfcfd;
  border-radius: 20px;
  outline: none;
  padding: 10px 25px;
  margin: 5px;
`;
const StyledBackgroundModal = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledModal = styled.div`
  color: #fff;
  background: linear-gradient(-45deg, #e73c7e, #23a6d5);
  height: 20%;
  width: 50%;
  display: flex;
  justify-content: center;
  border-radius: 20px;
  align-items: center;
  flex-direction: column;
`;
