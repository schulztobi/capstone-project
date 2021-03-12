import { useState } from 'react';
import { Avatar, Box, makeStyles, Typography } from '@material-ui/core';
import Navigation from '../components/Navigation';
import { deleteToken } from '../services/tokenStorage';
import Background from '../components/background';
import TopBar from '../components/TopBar';
import placeholderImage from '../assets/img/headerImage.png';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },

  contentWrapper: {
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'flex-start',

    margin: '0 auto',
  },
  profileHeader: {
    margin: '20px auto',
    width: '324px',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',

    borderRadius: '5px',
    backgroundColor: '#120032',
    padding: '15px',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
  },
  profileHeaderData: {
    marginTop: '20px',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-evenly',
  },

  impressionsWrapper: {
    width: '324px',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '20px',
    paddingBottom: '30px',
  },
  impressionImage: { width: '70px', height: '70px', marginTop: '5px' },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginBottom: '16px',
  },
}));

export default function ProfilePage() {
  const classes = useStyles();

  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [changePage, setChangePage] = useState(false);

  function logOut() {
    deleteToken();
    setIsLoggedOut(true);
  }

  return (
    <>
      <Background>
        <TopBar headline="Profile" />
        <div className={classes.contentWrapper}>
          <div className={classes.profileHeader}>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              className={classes.large}
            />
            <Typography variant="h2" component="h2">
              John Doe
            </Typography>
            <Typography variant="p" component="p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil in
            </Typography>
            <div className={classes.profileHeaderData}>
              <div className={classes.dataItem}>
                <Typography variant="h3" component="h3">
                  455
                </Typography>
                <Typography variant="body2" component="p">
                  Tries
                </Typography>
              </div>
              <div className={classes.dataItem}>
                <Typography variant="h3" component="h3">
                  455
                </Typography>
                <Typography variant="body2" component="p">
                  Successfull
                </Typography>
              </div>
              <div className={classes.dataItem}>
                <Typography variant="h3" component="h3">
                  455
                </Typography>
                <Typography variant="body2" component="p">
                  Followers
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <Box textAlign="center">
          <Typography variant="h2">Latest Dares</Typography>
        </Box>
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
        <Navigation />
      </Background>
    </>
  );
}
