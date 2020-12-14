import styled from 'styled-components/macro';
import DareCard from '../components/DareCard';
import { useEffect, useState } from 'react';
import getDares from '../services/getDares';

export default function Darelist() {
  const [dareData, setDareData] = useState([
    {
      headline: '',
      infotext: '',
    },
  ]);

  useEffect(() => {
    getDares().then((data) => setDareData([...data]));
  }, []);

  // console.log(dareData);

  return (
    <>
      <List>
        {dareData?.map((dare) => {
          console.log(dare);
          return (
            <DareCard key={dare._id} id={dare._id} headline={dare.headline} />
          );
        })}
      </List>
    </>
  );
}
const List = styled.ul`
  padding: 0;
  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  width: 100%;
  height: 250px;
  overflow-y: scroll;
  scrollbar-color: red;
`;
