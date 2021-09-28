import React from 'react';
import { Typography } from '@material-ui/core';
import { EpisodesTable } from './ShowEpisodesTable/EpisodesTable';
import { useStyles } from './ShowEpisodes.style';

export const ShowEpisodes = ({ episodes, name }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant={'h2'}>{name}</Typography>
      <EpisodesTable episodes={episodes} />
    </div>
  );
};
