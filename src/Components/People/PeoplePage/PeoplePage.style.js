import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.primary.white,
  },
  imgContainer: {
    marginTop: theme.spacing(6),
    display: 'flex',
    width: '100%',
    justifyContent: 'space-evenly',
  },
}));
