import styled from 'styled-components/macro';
import DareCard from '../components/DareCard';
import { useEffect, useState } from 'react';
import getDares from '../services/getDares';
import { decodedToken } from '../services/decodedToken';

export default function Darelist() {
  const [dareData, setDareData] = useState([
    {
      headline: '',
      infotext: '',
      daredUser: [],
    },
  ]);
  const [findDaredUserId, setFindDaredUserId] = useState([]);

  useEffect(() => {
    getDares().then((data) => setDareData([...data]));
  }, []);

  console.log(dareData);

  // const filteredDaredUser = dareData.filter((user) => {
  //   return user.dareCreator;
  // });
  // console.log('filter', filteredDaredUser);
  // // let idArray = [];
  // // filteredDaredUser.map((user) => idArray.push(user._id));
  // // setFindDaredUserId(idArray);
  // const showDaredUserId = filteredDaredUser.filter((user) => {
  //   return user.dareCreator;
  // });
  // console.log(decodedToken.userId);
  // console.log('showUserId', showDaredUserId);

  // function handleDareChange({ decodedToken }) {
  //   const filteredDare = dareData.filter((dare) => {
  //     return dare.dareCreator.toLowerCase().includes(decodedToken.userId);
  //   });
  //   console.log('filterdare', filteredDare);
  // }

  // handleDareChange({ decodedToken });

  return (
    <>
      <List>
        {dareData?.map((dare) => {
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
