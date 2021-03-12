import { Box, Typography, makeStyles } from '@material-ui/core';
import React from 'react';

import step2Svg from '../../assets/img/WelcomeSteps/step2.svg';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
  },
  header: {
    marginTop: '30px',
    padding: '25px',
    textAlign: 'center',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
  },
  text: {
    width: '324px',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    textAlign: 'center',

    margin: '0 auto',
    borderRadius: '19px',

    padding: '15px',
  },
  svg: {
    margin: '20px auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    textAlign: 'center',
  },
}));

function Step2(props) {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.header}>
        <Typography variant="h1" component="h1" color="primary">
          What it is all about?
        </Typography>
      </Box>
      <img src={step2Svg} alt="" className={classes.svg} />
      <Box className={classes.text}>
        quaerat error! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam, mollitia cum enim facere in dolore dolor nisi culpa expedita
        ratione nam! Quo distinctio autem accusamus dolorum numquam blanditiis
      </Box>
    </div>
  );
}

export default Step2;
