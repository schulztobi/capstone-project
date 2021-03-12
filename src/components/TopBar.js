import { Box, makeStyles, Typography } from '@material-ui/core';

import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  topBarWrapper: {
    paddingTop: '32px',
  },
  topBar: {
    width: '100%',
    height: '45px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#080017',
    padding: '8px',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
    color: '#fff',
    letterSpacing: '2px',

    '& svg:last-of-type': {
      right: '10px',
      position: 'absolute',
    },
  },
}));

export default function TopBar({ headline }) {
  const classes = useStyles();

  return (
    <div className={classes.topBarWrapper}>
      <div className={classes.topBar}>
        <Box>
          <Typography variant="h2" component="h2">
            {headline}
          </Typography>
        </Box>

        <MoreVertIcon />
      </div>
    </div>
  );
}
