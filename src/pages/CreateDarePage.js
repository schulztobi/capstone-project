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
  console.log(setCreateDare);

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
      <Form onSubmit={sendForm}>
        <StyledLabel htmlFor="headline">
          Headline :
          <InputStyled
            type="text"
            name="headline"
            onChange={handleDareChange}
          />
        </StyledLabel>

        <StyledLabel htmlFor="infotext">
          Infotext :
          <TextareaStyled
            name="infotext"
            cols="30"
            rows="10"
            onChange={handleDareChange}
          ></TextareaStyled>
        </StyledLabel>
        <InputStyled type="text" name="daredUser" onChange={handleUserChange} />
        <ButtonContainer>
          <ButtonStyled>Create</ButtonStyled>

          <Link to="/DaresPage">
            <ButtonStyled>Back</ButtonStyled>
          </Link>
        </ButtonContainer>
      </Form>
      {findUserName.map((user, index) => (
        <p key={index}>{user}</p>
      ))}
      <Navigation />
    </>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
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
  padding: 10px 25px;
  margin: 5px;
`;

const InputStyled = styled.input`
  color: #fbfcfd;
  background: transparent;
  border: 1px solid #fbfcfd;
  border-radius: 20px;
  outline: none;
  padding: 10px 25px;
  margin: 5px;
`;

const TextareaStyled = styled.textarea`
  color: #fbfcfd;
  background: transparent;
  border: 1px solid #fbfcfd;
  border-radius: 20px;
  outline: none;
  padding: 10px 25px;
  margin: 5px;
`;
