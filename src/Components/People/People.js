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
import { CustomButton } from '../CustomButton/CustomButton';

const People = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const classes = useStyles();
  const { data, loading } = useSelector(selectPeople);
  const [page, setPage] = useState(0);
  const [boundFetchPeople, boundClearPeople] = useAction([
    fetchPeople,
    clearPeopleData,
  ]);

  const clickHandler = (id) => {
    history.push(`/people/${id}`);
  };

  const loadSelectedPage = (selectPage) => {
    setPage(selectPage.selected);
  };

  useEffect(() => {
    boundFetchPeople(page);
    window.scrollTo(0, 0);
    return () => {
      boundClearPeople();
    };
  }, [page]);

  return (
    <div className={classes.root}>
      <CustomButton handleClick={() => setPage(page + 1)} />
      <Typography variant={'h2'}>{t(langTokens.nav.people)}</Typography>
      {loading === 'succeeded' ? (
        <>
          <ListItems items={data} clickHandler={clickHandler} />
          <ReactPaginate
            onPageChange={loadSelectedPage}
            containerClassName={classes.pagination}
            activeClassName={classes.active}
            initialPage={page}
            pageCount={326}
            pageRangeDisplayed={5}
            marginPagesDisplayed={1}
            previousLabel={'<'}
            nextLabel={'>'}
          />
        </>
      ) : (
        <CircularProgress style={{ marginTop: '30px' }} />
      )}
    </div>
  );
};
export default People;
