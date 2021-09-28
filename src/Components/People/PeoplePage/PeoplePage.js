import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getPeopleById, getShowsForPeopleById } from '../../../Api/api';
import { Typography } from '@material-ui/core';
import { InfoCard } from '../../InfoCard/InfoCard';
import { langTokens } from '../../../Locales/localization';
import { ListItems } from '../../ListItems/ListItems';
import { useStyles } from './PeoplePage.style';
import { useTranslation } from 'react-i18next';

const PeoplePage = () => {
  const params = useParams();
  const [person, setPerson] = useState();
  const [shows, setShows] = useState([]);
  const { t } = useTranslation();
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    getPeopleById(params.id).then((response) => {
      setPerson(response.data);
    });
    getShowsForPeopleById(params.id).then((response) => {
      setShows(response.data);
    });
  }, []);

  const showsArray = (array) => {
    return array.map((el) => el?._embedded?.show);
  };

  const handlerClick = (id) => {
    history.push(`/shows/${id}`);
  };

  return (
    <div className={classes.root}>
      <Typography variant={'h2'}>{person?.name}</Typography>
      <div className={classes.imgContainer}>
        <img src={person?.image?.medium} alt="logo" />
        <InfoCard item={person} />
      </div>
      <Typography variant={'h3'}>{t(langTokens.main.shows)}</Typography>
      {!!shows.length && (
        <ListItems
          items={showsArray(shows)}
          autoPaginationDisable
          clickHandler={handlerClick}
        />
      )}
    </div>
  );
};

export default PeoplePage;
