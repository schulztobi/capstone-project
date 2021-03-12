import { Box, Typography, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
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
}));

function Step1(props) {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.header}>
        <Typography variant="h1" component="h1" color="primary">
          Terms of conditions
        </Typography>
      </Box>
      <Box className={classes.tocContent}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        mollitia cum enim facere in dolore dolor nisi culpa expedita ratione
        nam! Quo distinctio autem accusamus dolorum numquam blanditiis quaerat
        error! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam, mollitia cum enim facere in dolore dolor nisi culpa expedita
        ratione nam! Quo distinctio autem accusamus dolorum numquam blanditiis
        quaerat error! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam, mollitia cum enim facere in dolore dolor nisi culpa expedita
        ratione nam! Quo distinctio autem accusamus dolorum numquam blanditiis
        quaerat error! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam, mollitia cum enim facere in dolore dolor nisi culpa expedita
        ratione nam! Quo distinctio autem accusamus dolorum numquam blanditiis
      </Box>
    </div>
  );
}

export default Step1;
