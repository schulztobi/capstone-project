import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export default function DareCard({ id, headline }) {
  return (
    <DareCardSection>
      <h3>{headline}</h3>
      <Link to={`/DaresPage/${id}`}>
        <StyledButton>Show me</StyledButton>
      </Link>
    </DareCardSection>
  );
}

const DareCardSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  margin-left: 16px;
  margin-right: 16px;
  padding: 10px;
  border: 1px solid #fff;
  border-radius: 10px;
  box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.3);
  h3 {
    padding: 0;
    margin: 0;
    color: var(--fifth);
    font-size: 120%;
  }
`;
const StyledButton = styled.button`
  color: #fbfcfd;
  background: transparent;
  border: 1px solid #fbfcfd;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  padding: 15px 15px;
  margin: 5px;

  :hover {
    color: var(--third);
    background: var(--fifth);
    box-shadow: 0 0 10px var(--fifth);
  }
`;
