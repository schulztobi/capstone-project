import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import Navigation from '../components/Navigation';
import getUser from '../services/getUser';
import Header from '../components/Header';
import { loadToken } from '../services/tokenStorage';
import {
  StyledButton,
  StyledBackgroundModal,
  StyledModal,
  StyledContainer,
} from '../styles/ReusableStyledComponents';

export default function CreateDarePage() {
  const [allUser, setAllUser] = useState([]);
  const [findUserId, setFindUserId] = useState([]);
  const [findUserName, setFindUserName] = useState([]);
  const [uploadSuccessful, setUploadSuccesful] = useState(false);
  const [createDare, setCreateDare] = useState({
    headline: '',
    infotext: '',
    daredUser: '',
    dareCreator: '',
  });

  const token = loadToken();
  const decodedToken = jwt_decode(token);

  useEffect(() => {
    getUser().then(data => {
      setAllUser([...data]);
      setCreateDare({
        ...createDare,
        daredUser: findUserId,
        dareCreator: decodedToken.userId,
      });
    });
  }, [findUserId]);

  function handleUserChange(event) {
    const filteredUser = allUser.filter(user =>
      user.username.toLowerCase().includes(event.target.value.toLowerCase()),
    );
    const idArray = [];
    filteredUser.map(user => idArray.push(user._id));
    setFindUserId(idArray);

    const nameArray = [];
    filteredUser.map(user => nameArray.push(user.username));
    setFindUserName(nameArray);
  }

  function sendForm(event) {
    event.preventDefault();
    fetch('http://localhost:4000/app/createDare', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': loadToken(),
      },
      body: JSON.stringify(createDare),
    })
      .then(data => data.json())
      .then(createdDare => console.log(createdDare, 'CREATED'))
      .catch(error => console.error(error));
  }

  function handleDareChange(event) {
    setCreateDare({
      ...createDare,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <>
      <StyledContainer>
        <Header title="Create A Dare" />
        <FormStyled onSubmit={sendForm}>
          <StyledLabel htmlFor="headline">
            Headline :
            <InputStyled
              type="text"
              name="headline"
              onChange={handleDareChange}
              placeholder="Enter your Dare topic..."
              required
            />
          </StyledLabel>

          <StyledLabel htmlFor="infotext">
            Infotext :
            <TextareaStyled
              name="infotext"
              cols="30"
              rows="10"
              onChange={handleDareChange}
              placeholder="Enter more details about your Dare..."
              required
            />
          </StyledLabel>
          <StyledLabel htmlFor="daredUser">
            I dare :
            <InputStyled
              type="text"
              name="daredUser"
              onChange={handleUserChange}
              placeholder="Enter the Username you wanna dare..."
              required
            />
          </StyledLabel>
          {/* <StyledLabel>Userlist :</StyledLabel>
          <List>
            {findUserName.map((user, index) => (
              <DareCardSection key={index}>{user}</DareCardSection>
            ))}
          </List> */}
          <ButtonContainer>
            <ButtonStyled onClick={() => setUploadSuccesful(true)}>
              Create
            </ButtonStyled>

            <Link to="/DaresPage">
              <ButtonStyled>Back</ButtonStyled>
            </Link>
          </ButtonContainer>
        </FormStyled>
        <Navigation />
        {uploadSuccessful && (
          <StyledBackgroundModal>
            <StyledModal>
              <p>Dare created successfully</p>
              <Link to="/DaresPage">
                <StyledButton>ok</StyledButton>
              </Link>
            </StyledModal>
          </StyledBackgroundModal>
        )}
      </StyledContainer>
    </>
  );
}
const DareCardSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  margin-left: 16px;
  margin-right: 16px;
  padding: 10px;
  border: 1px solid #fff;
  border-radius: 10px;
  box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.3);
  color: var(--fifth);
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  width: 80%;
  overflow-y: scroll;
  scrollbar-color: red;
  border-bottom: 1px solid var(--fifth);

  li {
  }
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  width: 90%;
  margin: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const ButtonStyled = styled.button`
  color: #fbfcfd;
  background: transparent;
  border: 1px solid #fbfcfd;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  padding: 20px 40px;
  margin: 5px;
  margin-top: 20px;
  font-size: 15px;
`;

const InputStyled = styled.input`
  color: #fbfcfd;
  background: transparent;
  border: 1px solid #fbfcfd;
  border-radius: 20px;
  outline: none;
  padding: 10px 25px;
  margin: 5px;
  width: 100%;
`;

const TextareaStyled = styled.textarea`
  color: #fbfcfd;
  background: transparent;
  border: 1px solid #fbfcfd;
  border-radius: 20px;
  outline: none;
  padding: 10px 25px;
  margin: 5px;
  width: 100%;
`;
