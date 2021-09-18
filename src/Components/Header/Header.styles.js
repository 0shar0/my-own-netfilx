import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  header: (props) => ({
    width: '100vw',
    height: 100,
    backgroundImage: `url(${props.img})`,
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 8),
  }),
  nameContainer: {
    margin: theme.spacing(3, 0),
  },
  name: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
  },
}));
