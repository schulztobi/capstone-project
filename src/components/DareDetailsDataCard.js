import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },

  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
  tag: {
    backgroundColor: '#337e81',
    color: '#fff',
    width: '80px',
    padding: '6px 8px 6px 8px',
    borderRadius: '5px',
    fontSize: '11px',
    margin: '3px',
    textAlign: 'center',
  },
}));

const DareDetailsDataCard = ({ label, info }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.wrapper}>
        <Typography variant="h3">{label}</Typography>
        <div className={classes.tag}>{info}</div>
      </div>
    </>
  );
};

export default DareDetailsDataCard;
