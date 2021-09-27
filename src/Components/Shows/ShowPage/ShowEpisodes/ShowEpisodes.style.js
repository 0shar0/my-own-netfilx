import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    color: theme.palette.common.white,
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(10),
  },
}));
