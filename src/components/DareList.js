import styled from 'styled-components/macro';
import DareCard from '../components/DareCard';
import { useEffect, useState } from 'react';
import getDares from '../services/getDares';
import { decodedToken } from '../services/decodedToken';
import getUserDares from '../services/getUserDares';

export default function Darelist() {
  const [dareData, setDareData] = useState([
    {
      headline: '',
      infotext: '',
    },
  ]);

  const [daresData, setDaresData] = useState([[], []]);

  useEffect(() => {
    getDares().then((data) => setDareData([...data]));
    getUserDares().then((data) => setDaresData(data));
  }, []);

  function filteredDareUser(decodedToken, dares) {
    return dares.filter(
      (dare) => dare.daredUser && dare.daredUser.includes(decodedToken.userId)
    );
  }
  const findDaredUser = filteredDareUser(decodedToken, dareData);

  return (
    <>
      <List>
        {daresData[1].map((dare) => {
          return (
            <DareCard key={dare._id} id={dare._id} headline={dare.headline} />
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
