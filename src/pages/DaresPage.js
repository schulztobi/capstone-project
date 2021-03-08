import styled from 'styled-components/macro';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import getUserDares from '../services/getUserDares';
import DareCard from '../components/DareCard';
import WhomIDaredCard from '../components/WhomIDaredCard';

export default function DaresPage() {
  const [daresData, setDaresData] = useState([[], []]);
  useEffect(() => {
    getUserDares().then(data => setDaresData(data));
  }, []);

  return (
    <>
      <Header title="Dares" />
      <StyledCardGrid>
        <Headline>Dares</Headline>
        <List>
          {daresData[1].map(dare => (
            <DareCard key={dare._id} id={dare._id} headline={dare.headline} />
          ))}
        </List>
        <Headline>Whom I dared</Headline>
        <List>
          {daresData[0].map(dare => (
            <WhomIDaredCard
              key={dare._id}
              id={dare._id}
              headline={dare.headline}
            />
          ))}
        </List>
      </StyledCardGrid>
      <Navigation />
    </>
  );
}

const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  width: 100%;
  height: 250px;
  overflow-y: scroll;
  scrollbar-color: red;
  border-bottom: 1px solid var(--fifth);
`;

const StyledCardGrid = styled.main`
  display: flex;
  flex-direction: column;
  margin: 30px;
  align-items: space-around;
`;
const Headline = styled.h2`
  color: #fff;
  margin: 0;
  font-size: 20px;
`;
