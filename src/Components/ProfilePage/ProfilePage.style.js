import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    width: 0,
    height: 0,
  },
  image: {
    cursor: 'pointer',
  },
  title: {
    margin: theme.spacing(5, 0),
  },
  friendsButton: {
    position: 'absolute',
    top: theme.spacing(28),
    left: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
  },
}));
