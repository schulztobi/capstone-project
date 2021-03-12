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

function CreateDateStep2(props) {
  const classes = useStyles();
  return (
    <div>
      <Box textAlign="center" className={classes.contentHeader}>
        <Typography variant="h2" component="h2">
          Dare Ttitle:
        </Typography>
        <Box mb={2} textAlign="center">
          <CustomTextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
          />
        </Box>

        <Typography variant="h2" component="h2">
          Dare Message:
        </Typography>
        <Box mb={2} textAlign="center">
          <CustomTextField
            id="outlined-basic"
            label="Dare Message"
            multiline
            rows={6}
            defaultValue=""
            variant="outlined"
          />
        </Box>
      </Box>
    </div>
  );
}

export default CreateDateStep2;
