import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { NO_IMAGE } from '../../Constant/Main';
import { useStyles } from './ItemCard.style';

export const ItemCard = ({ item, clickHandler }) => {
  const classes = useStyles();
  return (
    <div onClick={() => clickHandler(item.id)} className={classes.root}>
      <Container disableGutters>
        <img
          src={item?.image?.medium || NO_IMAGE}
          alt={item.name}
          width={210}
          height={295}
        />
        <div className={classes.textWrapper}>
          <Typography variant={'h4'}>{item.name}</Typography>
          {item?.rating?.average && (
              <Rating
                defaultValue={item?.rating?.average}
                max={10}
                readOnly
                precision={0.1}
                size={'small'}
              />
          )}
        </div>
      </Container>
    </div>
  );
};
