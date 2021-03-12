import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, makeStyles } from '@material-ui/core';
import Navigation from '../components/Navigation';
import getUserDares from '../services/getUserDares';
import DareCard from '../components/DareCard';
import Background from '../components/background';
import DareCardHighlight from '../components/DareCardHighlight';
import DarePageFilterbar from '../components/DarePageFilterbar';
import TopBar from '../components/TopBar';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  header: {
    marginTop: '80px',
    padding: '25px',
    textAlign: 'center',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
  },
  tocContent: {
    width: '324px',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    textAlign: 'center',

    margin: '0 auto',
    borderRadius: '19px',
    backgroundColor: '#120032',
    padding: '25px',
  },
  daresWrapper: {
    width: '324px',
    marginTop: '9px',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    margin: '0 auto',
  },
}));

export default function DaresPage() {
  const classes = useStyles();

  const [daresData, setDaresData] = useState([[], []]);
  useEffect(() => {
    getUserDares().then(data => setDaresData(data));
  }, []);

  return (
    <>
      <Background>
        <TopBar headline="Dares Feed" />
        {/* <Box textAlign="center">
          <Typography>Dares Feed </Typography>
        </Box> */}
        <DarePageFilterbar />
        <div className={classes.daresGrid}>
          <DareCardHighlight headline="#1 Highlight Dare" key={3} id={10} />

          {/* {daresData[1].map(dare => (
            <DareCard key={dare._id} id={dare._id} headline={dare.headline} />
          ))} */}
          <div className={classes.daresWrapper}>
            <Link to="/DareDetailsPage">
              <DareCard key={1} id={2} headline="headline" />
            </Link>
            <DareCard key={1} id={2} headline="headline" />
            <DareCard key={1} id={2} headline="headline" />
            <DareCard key={1} id={2} headline="headline" />
            <DareCard key={1} id={2} headline="headline" />
            <DareCard key={1} id={2} headline="headline" />
          </div>
          <Typography>Whom I dared</Typography>

          {/* {daresData[0].map(dare => (
            <WhomIDaredCard
              key={dare._id}
              id={dare._id}
              headline={dare.headline}
            />
          ))} */}
        </div>
        <Navigation />
      </Background>
    </>
  );
}
