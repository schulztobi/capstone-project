import Header from '../components/Header';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import getUser from '../services/getUser';
import jwt_decode from 'jwt-decode';
import { loadToken } from '../services/tokenStorage';

export default function CreateDarePage() {
  const [allUser, setAllUser] = useState([]);
  const [findUserId, setFindUserId] = useState([]);
  const [findUserName, setFindUserName] = useState([]);
  const [createDare, setCreateDare] = useState({
    headline: '',
    infotext: '',
    daredUser: '',
    dareCreator: '',
  });

  let token = loadToken();
  const decodedToken = jwt_decode(token);

  useEffect(() => {
    getUser().then((data) => {
      setAllUser([...data]);
      setCreateDare({
        ...createDare,
        daredUser: findUserId,
        dareCreator: decodedToken.userId,
      });
    });
  }, [findUserId]);

  function handleUserChange(event) {
    const filteredUser = allUser.filter((user) => {
      return user.username
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    let idArray = [];
    filteredUser.map((user) => idArray.push(user._id));
    setFindUserId(idArray);

    let nameArray = [];
    filteredUser.map((user) => nameArray.push(user.username));
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
      .then((data) => data.json())
      .then((createdDare) => console.log(createdDare, 'CREATED'))
      .catch((error) => console.error(error));
  }

  function handleDareChange(event) {
    setCreateDare({
      ...createDare,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <>
      <Header title="Create A Dare" />
      <FormStyled onSubmit={sendForm}>
        <StyledLabel htmlFor="headline">
          Headline :
          <InputStyled
            type="text"
            name="headline"
            onChange={handleDareChange}
            placeholder="Enter your Dare Name..."
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
            placeholder="Enter Details about your Dare..."
            required
          ></TextareaStyled>
        </StyledLabel>
        <StyledLabel htmlFor="daredUser">
          I dare :
          <InputStyled
            type="text"
            name="daredUser"
            onChange={handleUserChange}
            placeholder="Enter User you wanna dare..."
            required
          />
        </StyledLabel>
        <StyledLabel>Userlist :</StyledLabel>
        <List>
          {findUserName.map((user, index) => (
            <DareCardSection key={index}>{user}</DareCardSection>
          ))}
        </List>
        <ButtonContainer>
          <ButtonStyled>Create</ButtonStyled>

          <Link to="/DaresPage">
            <ButtonStyled>Back</ButtonStyled>
          </Link>
        </ButtonContainer>
      </FormStyled>
      <Navigation />
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
  width: 80%;
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
  padding: 20px 45px;
  margin: 5px;
  margin-top: 20px;
  font-size: 20px;
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
