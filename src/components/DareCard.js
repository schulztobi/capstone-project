import { Link } from 'react-router-dom';
import { Box, Button, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  dareCard: {
    backgroundColor: '#120032',
    width: '158px',
    height: '140px',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '7px',
    borderRadius: '5px',
    padding: '12px',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
  },
  timeAgo: {
    fontSize: '8px',
  },
}));

export default function DareCard({ id, headline }) {
  const classes = useStyles();

  return (
    <div className={classes.dareCard}>
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
