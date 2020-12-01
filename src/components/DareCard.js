import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export default function DareCard({ id, headline }) {
  return (
    <DareCardSection>
      <p>{headline}</p>
      <Link to={`/DaresPage/${id}`}>
        <button>Show me</button>
      </Link>
    </DareCardSection>
  );
}

const DareCardSection = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  margin-bottom: 5px;
  padding: 5px;
  background-color: var(--silver-main);

  p {
    font-weight: 400;
    padding: 0;
    margin: 0;
    color: var(--blue-75);
    font-size: 100%;
  }
`;
