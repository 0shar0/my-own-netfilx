import React, { useEffect, useRef, useState } from 'react';
import { ShowCard } from './ShowCard/ShowCard';
import { useStyles } from './ShowsList.style';
import { AutoPaginationComponent } from '../../AutoPaginationComponent';

export const ShowsList = ({ items }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AutoPaginationComponent
        className={classes.root}
        componentList={items.map((item) => (
          <ShowCard key={item.id} item={item} />
        ))}
      />
    </div>
  );
};
