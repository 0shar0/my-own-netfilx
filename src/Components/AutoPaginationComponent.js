import React, { useEffect, useRef, useState } from 'react';
import { PeopleCard } from './People/PeopleList/PeopleCard/PeopleCard';

export const AutoPaginationComponent = ({ componentList, className }) => {
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
    <>
      {componentList.slice(0, count)}
      <div className={className} ref={lastElement}>
        {componentList.slice(count, count + 20)}
      </div>
    </>
  );
};
