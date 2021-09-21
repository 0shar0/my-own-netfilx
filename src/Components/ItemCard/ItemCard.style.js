import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    cursor: 'pointer',
    marginTop: theme.spacing(6),
    padding: 0,
    border: `solid 2px ${theme.palette.primary.main}`,
    width: 215,
    '& > a': {
      textDecoration: 'none',
      color: theme.palette.primary.white,
    },
  },
  textWrapper: {
    marginTop: theme.spacing(-1),
    height: 70,
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-evenly',
  },
}));
