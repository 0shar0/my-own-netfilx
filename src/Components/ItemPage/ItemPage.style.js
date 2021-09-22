import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.primary.white,
  },
  imgContainer: {
    marginTop: theme.spacing(6),
    display: 'flex',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  summary: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '&>h3': {
      margin: theme.spacing(6, 0),
    },
  },
  lastEpisodes: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  episodesTable: {
    minWidth: '100%',
    textAlign: 'center',
    marginTop: theme.spacing(6),
  },
}));
