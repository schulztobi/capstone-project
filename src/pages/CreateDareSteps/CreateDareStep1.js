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

function CreateDateStep1(props) {
  const classes = useStyles();

  const [checkboxes, setCheckboxes] = useState({
    community: false,
    private: false,
    group: false,
  });

  const handleCheckboxChange = event => {
    setCheckboxes({
      ...checkboxes,
      [event.target.name]: !checkboxes[event.target.name],
    });
  };

  return (
    <div>
      <Box textAlign="center" className={classes.contentHeader}>
        <Typography variant="h2" component="h2">
          Dare Type:
        </Typography>
        <Box mb={3}>
          <div className={classes.dareTypes}>
            <DareTypeCheckbox
              checkboxClick={handleCheckboxChange}
              label="Community"
              nameKey="community"
              disabled={false}
              isChecked={checkboxes.community}
            />
            <DareTypeCheckbox
              checkboxClick={handleCheckboxChange}
              label="Private"
              nameKey="private"
              disabled={false}
              isChecked={checkboxes.private}
            />
            <DareTypeCheckbox
              checkboxClick={handleCheckboxChange}
              label="Group"
              nameKey="group"
              disabled={false}
              isChecked={checkboxes.group}
            />
          </div>
        </Box>
        <Typography variant="h2" component="h2">
          Who you wanna dare?
        </Typography>
      </Box>
      <Box mb={2} textAlign="center">
        <CustomTextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
        />
      </Box>
    </div>
  );
}

export default CreateDateStep1;
