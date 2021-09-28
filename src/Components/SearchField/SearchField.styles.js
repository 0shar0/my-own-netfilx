import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  searchIcon: {
    color: theme.palette.common.white,
    fontSize: 48,
  },
  searchInputWrapper: {
    padding: 0,
    height: 60,
  },
  searchInput: {
    width: '100%',
    height: 50,
    fontSize: 20,
    paddingLeft: theme.spacing(2),
  },
  searchInputIcon: {
    backgroundColor: theme.palette.common.white,
    marginRight: theme.spacing(2),
    fontSize: 32,
  },
  paper: {
    width: '100vw',
    left: `${theme.spacing(1)} !important`,
  },
  label: {
    padding: 0,
  },
  button: {
    position: 'absolute',
    left: theme.spacing(3),
    top: theme.spacing(20),
  },
}));
