import React from 'react';
import { ItemCard } from '../ItemCard/ItemCard';
import { AutoPaginationComponent } from '../AutoPaginationComponent';
import { useStyles } from './ListItems.style';

export const ListItems = ({ items, clickHandler, autoPaginationDisable }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {autoPaginationDisable ? (
        <>
          {items.map((item) => (
            <ItemCard clickHandler={clickHandler} key={item.id} item={item} />
          ))}
        </>
      ) : (
        <AutoPaginationComponent
          className={classes.root}
          componentList={items.map((item) => (
            <ItemCard clickHandler={clickHandler} key={item.id} item={item} />
          ))}
        />
      )}
    </div>
  );
};
