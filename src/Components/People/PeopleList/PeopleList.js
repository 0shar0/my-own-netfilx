import React from 'react';
import { useStyles } from './PeopleList.style';
import { PeopleCard } from './PeopleCard/PeopleCard';

export const PeopleList = ({ list }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {list.map((people) => (
        <PeopleCard key={people?.character.id} person={people?.character} id={people.person.id} />
      ))}
    </div>
  );
};
