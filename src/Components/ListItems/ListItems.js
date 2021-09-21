import React from 'react';
import { ItemCard } from '../ItemCard/ItemCard';
import { AutoPaginationComponent } from '../AutoPaginationComponent';
import { useStyles } from './ListItems.style';

export const ListItems = ({ items, clickHandler }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AutoPaginationComponent
        className={classes.root}
        componentList={items.map((item) => (
          <ItemCard clickHandler={clickHandler} key={item.id} item={item} />
        ))}
      />
    </div>
  );
};
