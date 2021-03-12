import { Link } from 'react-router-dom';
import {
  Typography,
  makeStyles,
  Grid,
  Button,
  Box,
  withStyles,
  TextField,
} from '@material-ui/core';
import headerImage from '../assets/img/headerImage.png';
import symbolBg from '../assets/img/symbolBg.svg';

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
    marginBottom: '40px',
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

const CustomTextField = withStyles({
  root: {
    // '& .MuiOutlinedInput-root': {
    //   '& fieldset': {
    //     borderRadius: `24px`,
    //     fontSize: '10px',
    //   },
    // },
  },
})(TextField);

export default function MainPage() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Grid
          container
          xs={12}
          className={classes.header}
          justify="flex-start"
          alignItems="center"
        >
          {/* <Typography
            variant="h1"
            component="h1"
            gutterBottom
            color="primary"
            textAlign="center"
          >
            I DARE YOU!
          </Typography> */}
        </Grid>

        <Grid item justify="flex-start" className={classes.grid}>
          <div className={classes.symbolBg}>
            <Box textAlign="center" className={classes.contentHeader}>
              <Typography variant="h1" component="h1" color="primary">
                Hey, <br />
                Sign in now!
              </Typography>
            </Box>

            <Grid
              container
              xs={12}
              justify="space-evenly"
              alignItems="center"
              direction="column"
              className={classes.contentGrid}
            >
              <Box mb={2}>
                <CustomTextField
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                />
              </Box>
              <Box mb={2}>
                <CustomTextField
                  id="outlined-basic2"
                  label="Password"
                  variant="outlined"
                  type="password"
                />
              </Box>

              <Link to="/login">
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Login
                </Button>
              </Link>

              <Link to="/register">
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                >
                  Sign Up
                </Button>
              </Link>
              <Box>
                <Typography variant="body2">Bottom text ??</Typography>
              </Box>
            </Grid>
          </div>
        </Grid>
      </div>
    </>
  );
}
