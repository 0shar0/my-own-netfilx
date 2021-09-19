import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { useStyles } from './ItemCard.style';
import { Link } from 'react-router-dom';
import { NO_IMAGE } from '../../../Constant/Main';
import { Rating } from '@material-ui/lab';

export const ItemCard = ({ item }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link to={`/shows/${item.id}`}>
        <Container disableGutters>
          <img
            src={item?.image?.medium || NO_IMAGE}
            alt={item.name}
            width={210}
            height={295}
          />
          <div className={classes.textWrapper}>
            <Typography variant={'h4'}>{item.name}</Typography>
            <Rating
              defaultValue={item?.rating?.average}
              max={10}
              readOnly
              precision={0.1}
              size={'small'}
            />
          </div>
        </Container>
      </Link>
    </div>
  );
};
