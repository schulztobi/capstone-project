import {
  Box,
  Grid,
  makeStyles,
  Typography,
  TextField,
  withStyles,
  Button,
} from '@material-ui/core';
import { React, useState } from 'react';
import DareTypeCheckbox from '../../components/dareTypeCheckbox';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
  },
  dareTypes: {
    display: 'flex',
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

function CreateDateStep3(props) {
  const [acceptedMedia, setAcceptedMedia] = useState({
    photo: false,
    video: false,
    audio: false,
  });

  const handleCheckboxChange = event => {
    setAcceptedMedia({
      ...acceptedMedia,
      [event.target.name]: !acceptedMedia[event.target.name],
    });
  };

  const classes = useStyles();
  return (
    <div>
      <Box textAlign="center" className={classes.contentHeader}>
        <Typography variant="h2" component="h2">
          Accepted Media:
        </Typography>
        <Box mb={3}>
          <div className={classes.dareTypes}>
            <DareTypeCheckbox
              checkboxClick={handleCheckboxChange}
              label="Photo"
              nameKey="photo"
              disabled={false}
              isChecked={acceptedMedia.photo}
            />
            <DareTypeCheckbox
              checkboxClick={handleCheckboxChange}
              label="Video"
              nameKey="video"
              disabled={false}
              isChecked={acceptedMedia.video}
            />
            <DareTypeCheckbox
              checkboxClick={handleCheckboxChange}
              label="Audio"
              nameKey="audio"
              disabled={false}
              isChecked={acceptedMedia.audio}
            />
          </div>
        </Box>
        <Typography variant="h2" component="h2">
          Hashtags:
        </Typography>
        <Box mb={2} textAlign="center">
          <CustomTextField
            id="outlined-basic"
            label="search users"
            variant="outlined"
          />
        </Box>
        <Box mb={2} textAlign="center">
          <Typography variant="h4" component="h4">
            sport, hockey, munich, beer
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default CreateDateStep3;
