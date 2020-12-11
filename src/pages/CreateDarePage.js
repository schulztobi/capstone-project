import Header from '../components/Header';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navigation from '../components/Navigation';

export default function CreateDarePage() {
  const [createDare, setCreateDare] = useState({
    headline: '',
    infotext: '',
  });

  function sendForm(event) {
    event.preventDefault();
    fetch('http://localhost:4000/app/createDare', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(createDare),
    })
      .then((data) => data.json())
      .then((createdDare) => console.log(createdDare, 'CREATED'))
      .catch((error) => console.error(error));
  }
  function handleChange(event) {
    console.log(event);
    setCreateDare({
      ...createDare,
      [event.target.name]: event.target.value,
    });
    console.log(createDare);
  }

  return (
    <>
      <Header title="Create A Dare" />
      <Form onSubmit={sendForm}>
        <StyledLabel htmlFor="headline">
          Headline :
          <input type="text" name="headline" onChange={handleChange} />
        </StyledLabel>

        <StyledLabel htmlFor="infotext">
          Infotext :
          <textarea
            name="infotext"
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </StyledLabel>
        <ButtonContainer>
          <button>Create</button>

          <Link to="/">
            <button>Back</button>
          </Link>
        </ButtonContainer>
      </Form>
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
`;

const ButtonContainer = styled.div`
  display: flex;
`;
