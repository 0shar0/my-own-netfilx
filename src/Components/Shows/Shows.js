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
import { Filters } from '../Filters/Filters';

const Shows = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const classes = useStyles();
  const { data, loading } = useSelector(selectShows);
  const limit = 20;
  const [boundFetchShows, boundClearShows] = useAction([
    fetchShows,
    clearShowsData,
  ]);
  const [page, setPage] = useState(1);

  const loadSelectedPage = (selectPage) => {
    setPage(selectPage.selected + 1);
  };

  const clickHandler = (id) => {
    history.push(`/shows/${id}`);
  };

  useEffect(() => {
    boundFetchShows({ page, limit });
    window.scrollTo(0, 0);
    return () => {
      boundClearShows();
    };
  }, [page]);

  return (
    <div className={classes.root}>
      <Typography variant={'h2'}>{t(langTokens.nav.shows)}</Typography>
      <Filters />
      {loading === 'succeeded' && data ? (
        <>
          <ListItems
            items={data.rows.map((d) => d.data)}
            autoPaginationDisable
            clickHandler={clickHandler}
          />
          <ReactPaginate
            onPageChange={loadSelectedPage}
            containerClassName={classes.pagination}
            activeClassName={classes.active}
            initialPage={page - 1}
            pageCount={data.count / limit}
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
