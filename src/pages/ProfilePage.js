import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { deleteToken } from '../services/tokenStorage';
import styled from 'styled-components/macro';
import { useState } from 'react';
import {
  StyledButton,
  StyledBackgroundModal,
  StyledModal,
} from '../styles/ReusableStyledComponents';

export default function ProfilePage() {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [changePage, setChangePage] = useState(false);

  function logOut() {
    deleteToken();
    setIsLoggedOut(true);
  }

  return (
    <>
      <ContainerStyled>
        <Header title="Profile" />
        <ButtonStyled onClick={logOut}>Logout</ButtonStyled>
        {isLoggedOut && (
          <StyledBackgroundModal>
            <StyledModal>
              <p>Logout successful</p>
              <StyledButton onClick={() => setChangePage(true)}>
                I Pussy Out
              </StyledButton>
            </StyledModal>
          </StyledBackgroundModal>
        )}
        {changePage && <Redirect to="/" />}
      </ContainerStyled>
      <Navigation />
    </>
  );
}
const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ButtonStyled = styled.button`
  color: #fbfcfd;
  background: transparent;
  border: 1px solid #fbfcfd;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  padding: 10px 25px;
  margin: 5px auto;
  width: 30%;
`;
