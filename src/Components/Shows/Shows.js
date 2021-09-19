import React, { useEffect, useState } from 'react';
import { useStyles } from './Shows.style';
import { useAction } from '../../Hooks/useAction';
import { fetchShows, selectShows } from '../../Reducer/shows';
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { langTokens } from '../../Locales/localization';
import ReactPaginate from 'react-paginate';

export const Shows = () => {
  const { t } = useTranslation();

  const classes = useStyles();
  const shows = useSelector(selectShows);

  const [boundFetchShows] = useAction([fetchShows]);
  const [page, setPage] = useState(0);

  const loadSelectedPage = (selectPage) => {
    setPage(selectPage.selected);
  };

  useEffect(() => {
    boundFetchShows({ page });
  }, [page]);

  return (
    <div className={classes.root}>
      <Typography variant={'h2'}>{t(langTokens.nav.shows)}</Typography>
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
    </div>
  );
};
