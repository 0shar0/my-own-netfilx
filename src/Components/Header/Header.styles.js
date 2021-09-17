import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  header: (props) => ({
    width: '100vw',
    height: 100,
    backgroundImage: `url(${props.img})`,
    backgroundSize: 'cover',
  }),
  name: {
    color: theme.palette.primary.main,
  },
}));
