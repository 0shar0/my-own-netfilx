import React, { useEffect, useState } from 'react';
import { useStyles } from './Shows.style';
import { useAction } from '../../Hooks/useAction';
import { fetchShows, selectShows } from '../../Reducer/shows';
import { useSelector } from 'react-redux';
import { CircularProgress, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { langTokens } from '../../Locales/localization';
import ReactPaginate from 'react-paginate';
import { clearShowsData } from '../../Reducer/shows/reducer';
import { ListItems } from '../ListItems/ListItems';
import { useHistory } from 'react-router-dom';

const Shows = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const classes = useStyles();
  const { data, loading } = useSelector(selectShows);

  const [boundFetchShows, boundClearShows] = useAction([
    fetchShows,
    clearShowsData,
  ]);
  const [page, setPage] = useState(0);

  const loadSelectedPage = (selectPage) => {
    setPage(selectPage.selected);
  };

  const clickHandler = (id) => {
    history.push(`/shows/${id}`);
  };

  useEffect(() => {
    boundFetchShows({ page });
    window.scrollTo(0, 0);
    return () => {
      boundClearShows();
    };
  }, [page]);

  return (
    <div className={classes.root}>
      <Typography variant={'h2'}>{t(langTokens.nav.shows)}</Typography>
      {loading === 'succeeded' ? (
        <>
          <ListItems items={data} clickHandler={clickHandler} />
          <ReactPaginate
            onPageChange={loadSelectedPage}
            containerClassName={classes.pagination}
            breakLinkClassName={classes.break}
            activeClassName={classes.active}
            initialPage={page}
            pageCount={231}
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
export default Shows;
