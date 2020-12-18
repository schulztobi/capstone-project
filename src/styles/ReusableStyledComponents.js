import styled from 'styled-components/macro';

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

export {
  StyledContainer,
  Styledform,
  StyledContent,
  StyledY,
  StyledButton,
  StyledInput,
  StyledBackgroundModal,
  StyledModal,
};
