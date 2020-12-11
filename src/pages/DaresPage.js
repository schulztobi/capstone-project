import styled from 'styled-components/macro';
import Header from '../components/Header';
import Darelist from '../components/DareList';
import Navigation from '../components/Navigation';

export default function DaresPage() {
  return (
    <>
      <Header title="Dares" />
      <StyledCardGrid>
        <Headline>New Dares</Headline>
        <Darelist />
        <Headline>Old Dares</Headline>
        <Darelist />
        <Headline>Who I dared</Headline>
        <Darelist />
      </StyledCardGrid>
      <Navigation />
    </>
  );
}

const StyledCardGrid = styled.main`
  padding-top: 0;
  gap: 0;
`;
const Headline = styled.h2`
  margin: 0;
  font-size: 20px;
  color: var(--red-main);
`;
