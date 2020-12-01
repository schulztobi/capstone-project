import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import getDares from '../services/getDares';
import { useEffect, useState } from 'react';

export default function DareCardDetails({ match }) {
  const [dareData, setDareData] = useState([
    {
      headline: '',
      infotext: '',
    },
  ]);

  useEffect(() => {
    getDares().then((data) => setDareData([...data]));
  }, []);

  console.log(dareData);

  const fetchedDare = dareData.find((dare) => dare._id === match.params.id);
  console.log('fetchdare', fetchedDare);

  return (
    <>
      <h1>{fetchedDare?.headline}</h1>
      <p>{fetchedDare?.infotext}</p>
      <Link to={`/DaresPage/DareCardUpload/${match.params.id}`}>
        <button>I Dare</button>
      </Link>
      <Link to="/DaresPage/">
        <button>I Pussy out</button>
      </Link>
    </>
  );
}

//   const [dareInfo, setDareInfo] = useState([
//     {
//       headline: '',
//       infotext: '',
//     },
//   ]);

//   getDares().then((data) => {
//     setDareInfo([...data]);
//     // console.log(data);
//   });

//   const fetchedDare = dareInfo.find((dare) => dare._id === match.params.id);

//   return (
//     <>
//       <h1>{fetchedDare.headline}</h1>
//       <p>{fetchedDare.infotext}</p>
//       <Link to={`/DaresPage/DareCardUpload/${match.params.id}`}>
//         <button>I Dare</button>
//       </Link>
//       <Link to="/DaresPage/">
//         <button>I Pussy out</button>
//       </Link>
//     </>
//   );
// }
