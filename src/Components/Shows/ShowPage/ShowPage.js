import React, { useEffect, useState } from 'react';
import {
  Link,
  Redirect,
  Route,
  Switch,
  useHistory,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import { getShowsById } from '../../../Api/api';
import { Card, CardContent, Typography } from '@material-ui/core';
import ReactHtmlParser from 'react-html-parser';
import { useTranslation } from 'react-i18next';
import { langTokens } from '../../../Locales/localization';
import { Rating } from '@material-ui/lab';
import { fetchEpisodes } from '../../../Reducer/episodes';
import { useAction } from '../../../Hooks/useAction';
import { useSelector } from 'react-redux';
import { selectEpisodes } from '../../../Reducer/episodes/selectors';
import { CustomButton } from '../../CustomButton/CustomButton';
import { ShowEpisodes } from './ShowEpisodes/ShowEpisodes';
import { EpisodesTable } from './ShowEpisodes/ShowEpisodesTable/EpisodesTable';
import { PeopleList } from '../../People/PeopleList/PeopleList';
import { routs } from '../../../Constant/Routing';
import { useStyles } from './ShowPage.style';
import { ListItems } from '../../ListItems/ListItems';

const ShowPage = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const classes = useStyles();
  const history = useHistory();
  const match = useRouteMatch();
  const [show, setShow] = useState();
  const [boundGetEpisodes] = useAction([fetchEpisodes]);
  const episodes = useSelector(selectEpisodes);
  const genre = show?.genres.join(' | ');

  const handlerPersonClick = (id) => {
    history.push(`/people/${id}`);
  };

  const personArray = (personAndCharacter) => {
    return personAndCharacter.map((p) => {
      const { person, character } = p;
      return { ...character, id: person.id };
    });
  };

  useEffect(() => {
    getShowsById(id).then((response) => setShow(response.data));
    boundGetEpisodes(id);
  }, []);

  return (
    <Switch>
      <Route exact path={match.path}>
        <div className={classes.root}>
          <Typography variant={'h2'}>{show?.name}</Typography>
          <div className={classes.imgContainer}>
            <img src={show?.image?.medium} alt="logo" />
            <Card>
              <CardContent>
                <Typography variant={'h3'}>
                  {t(langTokens.main.showInfo)}
                </Typography>
                {show?.webChannel && (
                  <Typography variant={'h5'}>
                    {t(langTokens.main.webChannel, { show })}
                  </Typography>
                )}
                <Typography variant={'h5'}>
                  {t(langTokens.main.average, { show })}
                </Typography>
                <Typography variant={'h5'}>
                  {t(langTokens.main.status, { show })}
                </Typography>
                <Typography variant={'h5'}>
                  {t(langTokens.main.type, { show })}
                </Typography>
                <Typography variant={'h5'}>
                  {t(langTokens.main.genre, { genre })}
                </Typography>
                {show?.rating.average && (
                  <Rating
                    defaultValue={show?.rating.average}
                    max={10}
                    readOnly
                    precision={0.1}
                  />
                )}
              </CardContent>
            </Card>
          </div>
          <div className={classes.summary}>
            <Typography variant={'h3'}>{t(langTokens.main.summary)}</Typography>
            <Typography variant={'h6'}>
              {ReactHtmlParser(show?.summary)}
            </Typography>
          </div>
          <div className={classes.lastEpisodes}>
            {!!episodes && (
              <div className={classes.episodesTable}>
                <Typography variant={'h3'}>
                  {t(langTokens.main.lastEpisodes)}
                </Typography>
                <EpisodesTable episodes={episodes.slice(-3)} />
              </div>
            )}
            <Link
              style={{ textDecoration: 'none' }}
              to={`${match.url}/episodes`}
            >
              <CustomButton text={t(langTokens.main.showAllEpisodes)} />
            </Link>
          </div>
          <Typography variant={'h3'}>{t(langTokens.main.cast)}</Typography>
          {!!show?._embedded?.cast && (
            <ListItems
              items={personArray(show?._embedded?.cast)}
              autoPaginationDisable
              clickHandler={handlerPersonClick}
            />
          )}
        </div>
      </Route>
      <Route path={`${match.url}/episodes`}>
        {!!episodes && <ShowEpisodes episodes={episodes} name={show?.name} />}
      </Route>
      <Redirect to={routs.error404.path} />
    </Switch>
  );
};

export default ShowPage;
