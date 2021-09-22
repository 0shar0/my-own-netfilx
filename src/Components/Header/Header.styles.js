import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  header: (props) => ({
    width: '100%',
    height: 100,
    backgroundImage: `url(${props.img})`,
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 8),
  }),
  nameContainer: {
    margin: theme.spacing(3, 0),
    color: theme.palette.primary.main,
  },
}));
