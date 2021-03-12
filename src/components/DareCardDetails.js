import { useEffect, useState } from 'react';
import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import getDares from '../services/getDares';
import Background from './background';
import DareDetailsDataCard from './DareDetailsDataCard';

import placeholderImage from '../assets/img/headerImage.png';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  wrapper: {
    padding: '8px',
  },
  goBackButton: {
    height: '45px',
    width: '45px',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '50%',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '8px',
    color: '#fff',
  },
  contentWrapper: {
    width: '324px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',

    margin: '0 auto',

    borderRadius: '19px',
    backgroundColor: '#120032',
    padding: '25px',
  },

  buttonsWrapper: {
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
  button: {
    width: '120px',
    height: '58px',

    borderRadius: '24px',
    margin: '8px',
  },
  tagsWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
  tag: {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    padding: '6px 8px 6px 8px',
    borderRadius: '13px',
    fontSize: '11px',
    margin: '5px',
  },
  dareDetailsData: {
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '20px',
  },
  topListWrapper: {
    marginTop: '40px',
    marginBottom: '20px',
    lineHeight: '10px',
    fontWeight: 'bold',
  },
  impressionsWrapper: {
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '20px',
  },
  impressionImage: { width: '70px', height: '70px' },
}));

export default function DareCardDetails({ match }) {
  const classes = useStyles();

  const [dareData, setDareData] = useState([
    {
      headline: '',
      infotext: '',
    },
  ]);

  useEffect(() => {
    getDares().then(data => setDareData([...data]));
  }, []);

  console.log(dareData);

  const fetchedDare = dareData.find(dare => dare._id === match.params.id);
  console.log('fetchdare', fetchedDare);

  return (
    <>
      <Background>
        <div className={classes.wrapper}>
          <Link to="/DaresPage">
            <div
              variant="contained"
              color="primary"
              className={classes.goBackButton}
            >
              <ArrowBackIcon />
            </div>
          </Link>
          <div className={classes.contentWrapper}>
            <Box mb={3}>
              <Typography variant="h1" component="h1" color="primary">
                #12 Do a backflip{fetchedDare?.headline}
              </Typography>
            </Box>

            <Typography varaint="body1" component="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus accusantium fugiat fugit. Tempore maxime eos, velit
              nihil provident aliquam quia tenetur architecto natus error
              voluptatem, dolorem vel nobis quod? Adipisci.
              {fetchedDare?.infotext}
            </Typography>
            <div className={classes.tagsWrapper}>
              <div className={classes.tag}>#Sports</div>
              <div className={classes.tag}>#hockey</div>
              <div className={classes.tag}>#workout</div>
            </div>
            <div className={classes.dareDetailsData}>
              <DareDetailsDataCard label="Condition" info="Private" />
              <DareDetailsDataCard label="Category" info="Community" />
              <DareDetailsDataCard label="End-Time" info="09.05.21" />
              <DareDetailsDataCard label="Succeeded" info="537" />
              <DareDetailsDataCard label="Tries" info="782" />
              <DareDetailsDataCard label="Daremaster" info="Tobias" />
            </div>
            <div className={classes.buttonsWrapper}>
              <Link to={`/DaresPage/DareCardUpload/${match.params.id}`}>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                >
                  I DARE
                </Button>
              </Link>
              <Link to="/DaresPage/">
                <Button className={classes.button} variant="contained">
                  I PUSSY OUT
                </Button>
              </Link>
            </div>
            <div className={classes.topListWrapper}>
              <Typography variant="h2">Toplist</Typography>
              <Typography variant="body1">1. Manfred Peters</Typography>
              <Typography variant="body1">2. Manfred Peters</Typography>
              <Typography variant="body1">3. Manfred Peters</Typography>
              <Typography variant="body1">4. Manfred Peters</Typography>
              <Typography variant="body1">5. Manfred Peters</Typography>
            </div>
            <Typography variant="h2">Impressions</Typography>
            <div className={classes.impressionsWrapper}>
              <img
                src={placeholderImage}
                alt=""
                className={classes.impressionImage}
              />
              <img
                src={placeholderImage}
                alt=""
                className={classes.impressionImage}
              />
              <img
                src={placeholderImage}
                alt=""
                className={classes.impressionImage}
              />
              <img
                src={placeholderImage}
                alt=""
                className={classes.impressionImage}
              />
              <img
                src={placeholderImage}
                alt=""
                className={classes.impressionImage}
              />
              <img
                src={placeholderImage}
                alt=""
                className={classes.impressionImage}
              />
              <img
                src={placeholderImage}
                alt=""
                className={classes.impressionImage}
              />
              <img
                src={placeholderImage}
                alt=""
                className={classes.impressionImage}
              />
              <img
                src={placeholderImage}
                alt=""
                className={classes.impressionImage}
              />
            </div>
          </div>
        </div>
      </Background>
    </>
  );
}
