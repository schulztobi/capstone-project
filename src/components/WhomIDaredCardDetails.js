import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import getDares from '../services/getDares';
import { useEffect, useState } from 'react';

export default function WhomIDaredCardDetails({ match }) {
  const [dareData, setDareData] = useState([
    {
      headline: '',
      infotext: '',
    },
  ]);

  useEffect(() => {
    getDares().then((data) => setDareData([...data]));
  }, []);

  console.log(dareData);

  const fetchedDare = dareData.find((dare) => dare._id === match.params.id);
  console.log('fetchdare', fetchedDare);

  return (
    <>
      <StyledContainer>
        <StyledContent>
          <h1>I Dare</h1>
          <StyledY>You</StyledY>
        </StyledContent>
        <StyledCard>
          <h1>{fetchedDare?.headline}</h1>
          <p>{fetchedDare?.infotext}</p>
          <StyledButtonContainer>
            <Link to={`/WhomIDared/Download/${match.params.id}`}>
              <StyledButtonDare>Show Proof</StyledButtonDare>
            </Link>
            <Link to="/DaresPage/">
              <StyledButtonPussy>I Pussy out</StyledButtonPussy>
            </Link>
          </StyledButtonContainer>
        </StyledCard>
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

const StyledCard = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  padding: 30px;
  margin: 15px;
  border-radius: 10px;
  box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.3);
  h1 {
    color: var(--fifth);
  }
  p {
    color: #e3e3e3;
  }
`;

const StyledButtonDare = styled.button`
  color: #fbfcfd;
  background: transparent;
  border: 1px solid #fbfcfd;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  padding: 10px 25px;
  margin: 5px;
  font-size: 15px;

  :hover {
    color: var(--fifth);
    background: #83f52c;
    box-shadow: 0 0 10px #83f52c;
  }
`;
const StyledButtonPussy = styled.button`
  color: #fbfcfd;
  background: transparent;
  border: 1px solid #fbfcfd;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  padding: 10px 25px;
  margin: 5px;
  font-size: 15px;

  :hover {
    color: var(--fifth);
    background: #ff073a;
    box-shadow: 0 0 10px #ff073a;
  }
`;
const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
