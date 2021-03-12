import {
  Box,
  Grid,
  makeStyles,
  Typography,
  TextField,
  withStyles,
  Button,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
  },
}));

function CreateDateStep4(props) {
  const classes = useStyles();
  return (
    <div>
      <Box textAlign="center" className={classes.contentHeader}>
        <Typography variant="h3" component="h3" color="primary">
          4
        </Typography>
      </Box>
    </div>
  );
}

export default CreateDateStep4;
