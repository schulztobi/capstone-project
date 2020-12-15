import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { deleteToken } from '../services/tokenStorage';
import styled from 'styled-components/macro';
import { useState } from 'react';

export default function ProfilePage() {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [changePage, setChangePage] = useState(false);

  function logOut() {
    deleteToken();
    setIsLoggedOut(true);
  }

  return (
    <>
      <StyledContainer>
        <Header title="Profile" />
        <StyledButton onClick={logOut}>Logout</StyledButton>
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
      </StyledContainer>
      <Navigation />
    </>
  );
}
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
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
const StyledButton = styled.button`
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
