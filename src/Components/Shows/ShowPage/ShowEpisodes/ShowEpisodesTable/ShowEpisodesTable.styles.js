import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root:{
    marginTop:theme.spacing(5)
  },
  season: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
  },
}));
