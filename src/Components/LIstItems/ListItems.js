import React from 'react';
import { ItemCard } from './ItemCard/ItemCard';
import { useStyles } from './ListItems.style';

export const ListItems = ({ items }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};
