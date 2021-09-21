import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './PeopleCard.style';
import { Link } from 'react-router-dom';
import {NO_IMAGE} from '../../../../Constant/Main';

export const PeopleCard = ({ person, id }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to={`/people/${id}`}>
        <img src={person?.image?.medium || NO_IMAGE} alt={person.name} width={210} height={295} />
        <Typography className={classes.text} variant={'h4'}>
          {person.name}
        </Typography>
      </Link>
    </div>
  );
};
