import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import {
  StyledContent,
  StyledY,
  StyledButton,
} from '../styles/ReusableStyledComponents';

export default function MainPage() {
  return (
    <>
      <ContainerStyled>
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
      </ContainerStyled>
    </>
  );
}

const ContainerStyled = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
