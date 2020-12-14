import styled from 'styled-components/macro';
import Header from '../components/Header';
import Darelist from '../components/DareList';
import Navigation from '../components/Navigation';

export default function DaresPage() {
  return (
    <>
      <Header title="Dares" />
      <StyledCardGrid>
        <Headline>Dares</Headline>
        <Darelist />
        <Headline>Whom I dared</Headline>
        <Darelist />
      </StyledCardGrid>
      <Navigation />
    </>
  );
}

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
