// TODO remove eslint disable
/* eslint-disable */

import Header from '../components/Header';

import {
  Box,
  Grid,
  makeStyles,
  Typography,
  TextField,
  withStyles,
  Button,
} from '@material-ui/core';
import headerImage from '../assets/img/headerImage.png';
import symbolBg from '../assets/img/symbolBg.svg';
import TopBar from '../components/TopBar';
import Background from '../components/background';
import Navigation from '../components/Navigation';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
  },
  header: {
    backgroundImage: `url(${headerImage})`,
    height: '155px',

    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

    backgroundPosition: 'center center',
  },
  grid: {
    height: '100%',
    background:
      'linear-gradient(#0b0629 0%, #290831 22.58%, #D40078 43.09%, #4c0b61 74.9%, #120032 100%)',
    borderRadius: '24px',
    paddingTop: '40px',
    marginTop: '-15px',
    borderTop: '1px solid #D40078',
  },
  symbolBg: {
    backgroundImage: `url(${symbolBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: '100%',
  },
  contentHeader: {
    borderTop: '1px solid #D40078',
    borderRadius: '24px',
    paddingTop: '40px',
    marginBottom: '16px',

    height: 'fit-content',

    backgroundSize: 'cover',
    width: '100%',
  },
  contentGrid: {
    backgroundSize: 'cover',
  },

  button: {
    width: '269px',
    height: '48px',
    borderRadius: '24px',
    margin: '8px 0 8px 0',
  },
}));

export default function MyDares() {
  const classes = useStyles();

  return (
    <>
      <Background>
        <div className={classes.root}>
          <TopBar headline="My Dares" />
          <Typography variant="h1" component="h1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
            consectetur ullam eum fuga minima ut? Ipsum veritatis omnis
            similique quod autem rem eveniet, sequi culpa impedit architecto
            exercitationem, quibusdam doloribus?
          </Typography>
        </div>
      </Background>
    </>
  );
}
