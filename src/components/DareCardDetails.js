import styled from 'styled-components/macro';
import dares from '../fixtures/Dares';
import { Link } from 'react-router-dom';

export default function DareCardDetails({ match }) {
  const fetchedDare = dares.find((dare) => dare.id === match.params.id);
  console.log(fetchedDare);

  return (
    <>
      <h1>{fetchedDare.headline}</h1>
      <p>{fetchedDare.infotext}</p>
      <Link to={`/DaresPage/DareCardUpload/${match.params.id}`}>
        <button>I Dare</button>
      </Link>
      <Link to="/DaresPage/">
        <button>I Pussy out</button>
      </Link>
    </>
  );
}
