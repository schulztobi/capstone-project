import { Box, Typography, makeStyles } from '@material-ui/core';
import { React, useState } from 'react';
import TabCheckbox from '../../components/tabCheckbox';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '667px',
  },
  header: {
    marginTop: '30px',
    padding: '25px',
    textAlign: 'center',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
  },
  checkboxesWrapper: {
    width: '100%',

    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    flexWrap: 'wrap',

    margin: '0 auto',
    borderRadius: '19px',
    // backgroundColor: '#120032',
    padding: '25px',
  },
}));

function Step4(props) {
  const classes = useStyles();

  const [checkboxes, setCheckboxes] = useState({
    sports: false,
    comedy: false,
    stunts: false,
    animals: false,
  });

  const handleCheckboxChange = event => {
    setCheckboxes({
      ...checkboxes,
      [event.target.name]: !checkboxes[event.target.name],
    });
  };

  return (
    <div>
      <Box className={classes.header}>
        <Typography variant="h1" component="h1" color="primary">
          Choose your style
        </Typography>
      </Box>

      <Box className={classes.checkboxesWrapper}>
        <Box mb={5}>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            ex cupiditate ipsum deserunt?
          </Typography>
        </Box>
        <TabCheckbox
          checkboxClick={handleCheckboxChange}
          label="Sports"
          nameKey="sports"
          disabled={false}
          isChecked={checkboxes.sports}
          //   iconInActive={<UTabIconInActive fontSize="large" />}
          //   iconActive={<UTabIconActive fontSize="large" />}
        />
        <TabCheckbox
          checkboxClick={handleCheckboxChange}
          label="comedy"
          nameKey="comedy"
          disabled={false}
          isChecked={checkboxes.comedy}
          //   iconInActive={<UTabIconInActive fontSize="large" />}
          //   iconActive={<UTabIconActive fontSize="large" />}
        />
        <TabCheckbox
          checkboxClick={handleCheckboxChange}
          label="stunts"
          nameKey="stunts"
          disabled={false}
          isChecked={checkboxes.stunts}
          //   iconInActive={<UTabIconInActive fontSize="large" />}
          //   iconActive={<UTabIconActive fontSize="large" />}
        />
        <TabCheckbox
          checkboxClick={handleCheckboxChange}
          label="animals"
          nameKey="animals"
          disabled={false}
          isChecked={checkboxes.animals}
          //   iconInActive={<UTabIconInActive fontSize="large" />}
          //   iconActive={<UTabIconActive fontSize="large" />}
        />
      </Box>
    </div>
  );
}

export default Step4;
