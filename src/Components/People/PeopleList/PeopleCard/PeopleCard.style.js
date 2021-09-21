import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: `solid 2px ${theme.palette.primary.main}`,
    width: 215,
    '& > a': {
      textDecoration: 'none',
      color: theme.palette.primary.white,
    },
  },
  text: {
    marginTop: theme.spacing(-1),
    height: 45,
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-evenly',
  },
}));
