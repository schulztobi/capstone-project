import { Link } from 'react-router-dom';
import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  dareHighlight: {
    width: '324px',
    height: '192px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    textAlign: 'left',

    margin: '0 auto',
    borderRadius: '5px',
    backgroundColor: '#120032',
    padding: '25px',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
  },

  timeAgo: {
    fontSize: '8px',
  },
}));

export default function DareCardHighlight({ id, headline }) {
  const classes = useStyles();

  return (
    <div className={classes.dareHighlight}>
      <Link to={`/DaresPage/${id}`}>
        <Box textAlign="right">
          <Typography variant="body2" className={classes.timeAgo}>
            2min ago
          </Typography>
        </Box>
        <Typography variant="h4" component="h4" color="primary">
          {headline}
        </Typography>
        <Typography variant="body2" component="p">
          lorem ipsum exerp lorem ipsum exerp lorem ipsum exerp lorem ...
        </Typography>
      </Link>
    </div>
  );
}
