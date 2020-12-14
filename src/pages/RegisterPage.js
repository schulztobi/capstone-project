import useForm from '../hooks/useForm';
import registerUser from '../services/registerUser';
import { useState } from 'react';
import styled from 'styled-components/macro';
import { Redirect } from 'react-router-dom';

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
const StyledContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
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
