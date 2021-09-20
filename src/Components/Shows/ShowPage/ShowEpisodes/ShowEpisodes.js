import React from 'react';
import { Typography } from '@material-ui/core';
import { EpisodesTable } from './EpisodesTable';

export const ShowEpisodes = ({ episodes, name }) => {
  return (
    <div style={{ color: 'white' }}>
      <Typography variant={'h2'}>{name}</Typography>
      <EpisodesTable episodes={episodes} />
    </div>
  );
};
