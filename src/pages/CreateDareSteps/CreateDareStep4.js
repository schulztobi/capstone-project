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
  margin: {
    margin: theme.spacing(1),
  },
  summaryBg: {
    width: '324px',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    textAlign: 'center',

    margin: '0 auto',
    borderRadius: '19px',
    backgroundColor: '#120032',
    padding: '25px',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.24)',
  },
}));

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.common.white,
    },
  },
}))(Button);

function CreateDateStep4(props) {
  const classes = useStyles();
  return (
    <div className={classes.summaryBg}>
      <Box textAlign="center" className={classes.contentHeader}>
        <Box textAlign="center" mb={3} color="secondary">
          <Typography variant="h4" component="h4">
            SUMMARY
          </Typography>
        </Box>
        <Typography variant="h1" component="h1" color="primary">
          Do 100 situps
        </Typography>
        <Typography variant="p" component="p">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
          quas impedit rerum blanditiis odit mollitia, deleniti soluta, a sequi
          maxime officia porro ut quis earum dolorem similique inventore cumque
          expedita.
        </Typography>
        <Box textAlign="center" mt={2}>
          <Typography variant="h4" component="h4" color="primary">
            Daretypes:
          </Typography>
          <ColorButton
            variant="contained"
            color="primary"
            className={classes.margin}
          >
            community
          </ColorButton>
          <ColorButton
            variant="contained"
            color="primary"
            className={classes.margin}
          >
            global
          </ColorButton>
        </Box>
        <Box textAlign="center" mt={2}>
          <Typography variant="h4" component="h4" color="primary">
            Hashtags:
          </Typography>
          <ColorButton
            variant="contained"
            color="primary"
            className={classes.margin}
          >
            soccer
          </ColorButton>
          <ColorButton
            variant="contained"
            color="primary"
            className={classes.margin}
          >
            hockey
          </ColorButton>
          <ColorButton
            variant="contained"
            color="primary"
            className={classes.margin}
          >
            munich
          </ColorButton>
        </Box>
        <Box textAlign="center" mt={2}>
          <Typography variant="h4" component="h4" color="primary">
            Accepted Media:
          </Typography>
          <ColorButton
            variant="contained"
            color="primary"
            className={classes.margin}
          >
            Photo
          </ColorButton>
          <ColorButton
            variant="contained"
            color="primary"
            className={classes.margin}
          >
            Audio
          </ColorButton>
        </Box>
      </Box>
    </div>
  );
}

export default CreateDateStep4;
