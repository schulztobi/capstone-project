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
  margin: 20px;
  padding: 30px;
  border: 1px solid #fff;
  border-radius: 10px;
  box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.3);
  p {
    font-weight: 400;
    padding: 0;
    margin: 0;
    color: var(--blue-75);
    font-size: 100%;
  }
`;
