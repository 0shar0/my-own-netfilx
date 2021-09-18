import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '50vw',
    justifyContent: 'space-between',
    alignItems: 'center',
    listStyle: 'none',
    margin: '0 auto',
    padding: theme.spacing(2, 10),
    backgroundColor: theme.palette.secondary.main,
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
  },
  link: {
    color: theme.palette.primary.white,
    textDecoration: 'none',
    '& active': {},
  },
}));
