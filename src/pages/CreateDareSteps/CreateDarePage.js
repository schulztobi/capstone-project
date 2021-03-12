// TODO remove eslint disable
/* eslint-disable */
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import jwt_decode from 'jwt-decode';
import Navigation from '../../components/Navigation';
import getUser from '../../services/getUser';
import Header from '../../components/Header';
import { loadToken } from '../../services/tokenStorage';
import Background from '../../components/background';
import {
  Box,
  Grid,
  makeStyles,
  Typography,
  TextField,
  withStyles,
  Button,
} from '@material-ui/core';
import headerImage from '../../assets/img/headerImage.png';
import symbolBg from '../../assets/img/symbolBg.svg';
import CreateDateStep1 from './CreateDareStep1';
import CreateDateStep2 from './CreateDareStep2';
import CreateDateStep3 from './CreateDareStep3';
import CreateDateStep4 from './CreateDareStep4';

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

export default function CreateDarePage() {
  const classes = useStyles();

  const [allUser, setAllUser] = useState([]);
  const [findUserId, setFindUserId] = useState([]);
  const [findUserName, setFindUserName] = useState([]);
  const [uploadSuccessful, setUploadSuccesful] = useState(false);
  const [createDare, setCreateDare] = useState({
    headline: '',
    infotext: '',
    daredUser: '',
    dareCreator: '',
  });

  const [stepCount, setStepCount] = useState(1);
  const [currentPage, setCurrentPage] = useState();

  const HandleStep = () => {
    switch (stepCount) {
      case 1:
        return <CreateDateStep1 />;
        break;
      case 2:
        return <CreateDateStep2 />;
        break;
      case 3:
        return <CreateDateStep3 />;
        break;
      case 4:
        return <CreateDateStep4 />;
        break;

      case 5:
        handleFinish();
      default:
        setStepCount(1);
        return <CreateDateStep1 />;

        break;
    }
  };

  const history = useHistory();
  const handleFinish = () => history.push('/DaresPage');

  // const token = loadToken();
  // const decodedToken = jwt_decode(token);

  // useEffect(() => {
  //   getUser().then(data => {
  //     setAllUser([...data]);
  //     setCreateDare({
  //       ...createDare,
  //       daredUser: findUserId,
  //       dareCreator: decodedToken.userId,
  //     });
  //   });
  // }, [findUserId]);

  // function handleUserChange(event) {
  //   const filteredUser = allUser.filter(user =>
  //     user.username.toLowerCase().includes(event.target.value.toLowerCase()),
  //   );
  //   const idArray = [];
  //   filteredUser.map(user => idArray.push(user._id));
  //   setFindUserId(idArray);

  //   const nameArray = [];
  //   filteredUser.map(user => nameArray.push(user.username));
  //   setFindUserName(nameArray);
  // }

  // function sendForm(event) {
  //   event.preventDefault();
  //   fetch('http://localhost:4000/app/createDare', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'auth-token': loadToken(),
  //     },
  //     body: JSON.stringify(createDare),
  //   })
  //     .then(data => data.json())
  //     .then(createdDare => console.log(createdDare, 'CREATED'))
  //     .catch(error => console.error(error));
  // }

  // function handleDareChange(event) {
  //   setCreateDare({
  //     ...createDare,
  //     [event.target.name]: event.target.value,
  //   });
  // }

  return (
    <>
      <div className={classes.root}>
        <Grid
          container
          xs={12}
          className={classes.header}
          justify="center"
          alignItems="center"
        >
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            color="primary"
            textAlign="center"
          >
            Create Dare
          </Typography>
        </Grid>

        <Grid item justify="flex-start" className={classes.grid}>
          <div className={classes.symbolBg}>
            <Grid
              container
              xs={12}
              justify="space-evenly"
              alignItems="center"
              direction="column"
              className={classes.contentGrid}
            >
              {<HandleStep />}
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => setStepCount(prevStepCount => prevStepCount + 1)}
              >
                next step
              </Button>

              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={() => setStepCount(prevStepCount => prevStepCount - 1)}
              >
                cancel/back
              </Button>
            </Grid>
          </div>
        </Grid>
      </div>
    </>
  );
}
