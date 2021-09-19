import React, { useEffect, useRef, useState } from 'react';
import { ItemCard } from './ItemCard/ItemCard';
import { useStyles } from './ListItems.style';

export const ListItems = ({ items }) => {
  const classes = useStyles();

  const lastElement = useRef(null);
  const observer = useRef(null);

  const [count, setCount] = useState(20);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }
    if (lastElement.current) {
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setCount((p) => p + 20);
        }
      });
      observer.current.observe(lastElement.current);
    }
  }, []);

  return (
    <div className={classes.root}>
      {items.slice(0, count).map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
      <div ref={lastElement} className={classes.root}>
        {items.slice(count, count + 20).map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
