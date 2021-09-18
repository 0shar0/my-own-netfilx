import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  header: (props) => ({
    width: '100vw',
    height: 100,
    backgroundImage: `url(${props.img})`,
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 8),
  }),
  name: {
    color: theme.palette.primary.main,
    margin: theme.spacing(3, 0),
  },
  rootButton: {
    backgroundColor: theme.palette.primary.main,
    height: 40,
    margin: theme.spacing(5, 0),
    color: theme.palette.primary.white,
    fontWeight: 600,
    '&:hover': {
      backgroundColor: theme.palette.primary.black,
    },
  },
}));
