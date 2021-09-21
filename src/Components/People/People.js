import React, { useEffect, useState } from 'react';
import { useStyles } from './People.style';
import { useAction } from '../../Hooks/useAction';
import { useSelector } from 'react-redux';
import { CircularProgress, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { langTokens } from '../../Locales/localization';
import ReactPaginate from 'react-paginate';
import { ListItems } from '../ListItems/ListItems';
import { useHistory } from 'react-router-dom';
import { fetchPeople, selectPeople } from '../../Reducer/people';
import { clearPeopleData } from '../../Reducer/people/reducer';

const People = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const classes = useStyles();
  const { data, loading } = useSelector(selectPeople);

  const [boundFetchPeople, boundClearPeople] = useAction([
    fetchPeople,
    clearPeopleData,
  ]);

  const clickHandler = (id) => {
    history.push(`/people/${id}`);
  };

  useEffect(() => {
    boundFetchPeople();
    window.scrollTo(0, 0);
    return () => {
      boundClearPeople();
    };
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant={'h2'}>{t(langTokens.nav.people)}</Typography>
      {loading === 'succeeded' ? (
        <>
          <ListItems items={data} clickHandler={clickHandler} />
        </>
      ) : (
        <CircularProgress style={{ marginTop: '30px' }} />
      )}
    </div>
  );
};
export default People;
