import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

export default function MainPage() {
  // function verifyUser(){
  //     loadToken()

  //     const { isToken, set}

  //     isToken? : login/register seite
  //     yes => token valid ? : login/register seite
  //     yes => homepage
  // }

  return (
    <>
      <StyledContainer>
        <StyledContent>
          <small>Welcome to</small>
          <h1>I Dare</h1>
          <StyledY>You</StyledY>
        </StyledContent>
        <Link to="/login">
          <StyledButton>Login</StyledButton>
        </Link>
        <Link to="/register">
          <StyledButton>Sign Up</StyledButton>
        </Link>
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
  justify-content: center;
  height: 100vh;
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
