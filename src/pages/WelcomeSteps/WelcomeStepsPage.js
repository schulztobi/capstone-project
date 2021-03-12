// TODO remove eslint disable
/* eslint-disable */
import React, { useState } from 'react';
import { Steps, Step } from 'react-step-builder';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import symbolBg from '../../assets/img/symbolBg.svg';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '667px',
  },
  header: {
    marginTop: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
  },
  grid: {
    height: '100%',
    background:
      'linear-gradient(#0b0629 0%, #290831 22.58%, #D40078 43.09%, #4c0b61 74.9%, #120032 100%)',
  },
  symbolBg: {
    backgroundImage: `url(${symbolBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: '100%',
  },
  buttonsWrapper: {
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '35%',
    height: '48px',

    borderRadius: '24px',
    margin: '8px',
  },
  nextArrowButton: {
    width: '60px',
    height: '60px',

    borderRadius: '50%',
    margin: '8px',
  },
}));

function WelcomeStepsPage() {
  const history = useHistory();
  const handleFinish = () => history.push('/DaresPage');
  const classes = useStyles();

  const [stepCount, setStepCount] = useState(1);
  const [currentPage, setCurrentPage] = useState();

  const HandleStep = () => {
    switch (stepCount) {
      case 1:
        return <Step1 />;
        break;
      case 2:
        return <Step2 />;
        break;
      case 3:
        return <Step3 />;
        break;
      case 4:
        return <Step4 />;
        break;

      case 5:
        handleFinish();
      default:
        setStepCount(1);
        return <Step1 />;

        break;
    }
  };

  return (
    <div className={classes.grid}>
      <div className={classes.symbolBg}>
        <Grid container xs={12} justify="flex-start" alignItems="center">
          {/* <Step1 /> */}
          {<HandleStep />}
        </Grid>

        <div className={classes.buttonsWrapper}>
          {stepCount === 1 ? (
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              <Link to="/" style={{ color: '#fff' }}>
                decline
              </Link>
            </Button>
          ) : null}
          {stepCount === 1 ? (
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => setStepCount(prevStepCount => prevStepCount + 1)}
            >
              Accept
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              className={classes.nextArrowButton}
              onClick={() => setStepCount(prevStepCount => prevStepCount + 1)}
            >
              <ArrowForwardIcon />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default WelcomeStepsPage;
