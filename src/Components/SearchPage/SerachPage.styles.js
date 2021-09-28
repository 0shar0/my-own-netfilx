import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
    display: 'flex',
    marginTop: theme.spacing(5),
  },
  noResult: {
    color: theme.palette.common.white,
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
