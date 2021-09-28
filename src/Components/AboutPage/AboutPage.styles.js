import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    minHeight: '50vh',
    flexDirection: 'column',
    marginTop: theme.spacing(5),
  },
  textWrapper: {
    display: 'flex',
    marginTop: theme.spacing(5),
    width: '100%',
  },
  textHeader: {
    minWidth: 250,
  },
}));
