import React, { useEffect, useState } from 'react';
import { useStyles } from './SerachPage.styles';
import { useHistory, useParams } from 'react-router-dom';
import { getPeopleSearch, getShowsSearch } from '../../Api/api';
import { ListItems } from '../ListItems/ListItems';
import { Box, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { langTokens } from '../../Locales/localization';

const SearchPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const { query } = useParams();
  const { t } = useTranslation();
  const [shows, setShows] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    getPeopleSearch(query).then((r) =>
      setPeople(r.data.map((el) => el.person)),
    );
    getShowsSearch(query).then((r) => setShows(r.data.map((el) => el.show)));
  }, []);

  return (
    <div className={classes.root}>
      {!!shows.length && (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <Typography variant={'h2'}>{t(langTokens.nav.shows)}</Typography>
          <ListItems
            autoPaginationDisable
            clickHandler={(id) => history.push(`/shows/${id}`)}
            items={shows}
          />
        </Box>
      )}
      {!!people.length && (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <Typography variant={'h2'}>{t(langTokens.nav.people)}</Typography>
          <ListItems
            autoPaginationDisable
            clickHandler={(id) => history.push(`/people/${id}`)}
            items={people}
          />
        </Box>
      )}
    </div>
  );
};

export default SearchPage;
