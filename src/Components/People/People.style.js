import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
    color: theme.palette.primary.white,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontSize: 20,
  },
  pagination: {
    color: theme.palette.primary.main,
    listStyle: 'none',
    cursor: 'pointer',
    display: 'flex',
    margin: theme.spacing(5, 0),
    '& a': {
      padding: theme.spacing(0, 2),
    },
  },
  active: {
    color: theme.palette.primary.white,
  },
}));
