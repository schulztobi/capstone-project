import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ViewListIcon from '@material-ui/icons/ViewList';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AppsIcon from '@material-ui/icons/Apps';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#120032',
    boxShadow: '-1px -3px 22px 0px rgba(0,0,0,0.25)',

    '& .MuiBottomNavigation-root': {
      backgroundColor: '#000',
    },
    '& .MuiBottomNavigationAction-root': {
      color: 'gray',
    },
    '& .Mui-selected': {
      color: theme.palette.primary.main,
    },
  },
}));

export default function Navigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('favorites');

  // const handleChange = (event, newValue) => {
  //   console.log('sfdffd', event);
  //   setValue(event.target.value);
  // };

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        console.log(newValue);
        setValue(newValue);
      }}
      className={classes.root}
      showLabels={false}
    >
      <BottomNavigationAction
        component={Link}
        to="/DaresPage"
        value="recents"
        icon={<ViewListIcon />}
      />

      <BottomNavigationAction
        component={Link}
        to="/myDares"
        value="mydares"
        icon={<AppsIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/CreateDarePage"
        value="create"
        icon={<AddBoxIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/ProfilePage"
        label=""
        value="profile"
        icon={<AccountBoxIcon />}
      />
    </BottomNavigation>
  );
}
