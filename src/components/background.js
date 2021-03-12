import React from 'react';
import { makeStyles } from '@material-ui/core';
import symbolBg from '../assets/img/symbolBg.svg';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
  },
  grid: {
    // height: '100%',
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
}));

const Background = props => {
  const classes = useStyles();

  return (
    <div className={classes.grid}>
      <div className={classes.symbolBg}>{props.children}</div>
    </div>
  );
};

export default Background;
