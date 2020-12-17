import styled from 'styled-components/macro';
import WhomIDaredCard from './WhomIDaredCard';
import { useEffect, useState } from 'react';
import getDares from '../services/getDares';
import { decodedToken } from '../services/decodedToken';

export default function WhomIDaredList() {
  const [dareData, setDareData] = useState([
    {
      headline: '',
      infotext: '',
    },
  ]);

  useEffect(() => {
    getDares().then((data) => setDareData([...data]));
  }, []);

  function filteredDareCreator(decodedToken, dares) {
    return dares.filter(
      (dare) => dare.dareCreator && dare.dareCreator === decodedToken.userId
    );
  }
  const findDareCreator = filteredDareCreator(decodedToken, dareData);

  return (
    <>
      <List>
        {findDareCreator.map((dare) => {
          return (
            <WhomIDaredCard
              key={dare._id}
              id={dare._id}
              headline={dare.headline}
            />
          );
        })}
      </List>
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
