import React from 'react';
import { Link, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { Card, CardContent, Typography } from '@material-ui/core';
import { langTokens } from '../../Locales/localization';
import { Rating } from '@material-ui/lab';
import ReactHtmlParser from 'react-html-parser';
import { EpisodesTable } from '../Shows/ShowPage/ShowEpisodes/ShowEpisodesTable/EpisodesTable';
import { CustomButton } from '../CustomButton/CustomButton';
import { ListItems } from '../ListItems/ListItems';
import { ShowEpisodes } from '../Shows/ShowPage/ShowEpisodes/ShowEpisodes';
import { routs } from '../../Constant/Routing';
import { useStyles } from './ItemPage.style';
import { useTranslation } from 'react-i18next';

export const ItemPage = ({ item, episodes, handlerClick }) => {
  const classes = useStyles();
  const genre = item?.genres.join(' | ');

  const { t } = useTranslation();
  const match = useRouteMatch();

  const personArray = (personAndCharacter) => {
    return personAndCharacter.map((p) => {
      const { person, character } = p;
      return { ...character, id: person.id };
    });
  };

  return (
    <Switch>
      <Route exact path={match.path}>
        <div className={classes.root}>
          <Typography variant={'h2'}>{item?.name}</Typography>
          <div className={classes.imgContainer}>
            <img src={item?.image?.medium} alt="logo" />
            <Card>
              <CardContent>
                <Typography variant={'h3'}>
                  {t(langTokens.main.showInfo)}
                </Typography>
                {item?.webChannel && (
                  <Typography variant={'h5'}>
                    {t(langTokens.main.webChannel, { show: item })}
                  </Typography>
                )}
                <Typography variant={'h5'}>
                  {t(langTokens.main.average, { show: item })}
                </Typography>
                <Typography variant={'h5'}>
                  {t(langTokens.main.status, { show: item })}
                </Typography>
                <Typography variant={'h5'}>
                  {t(langTokens.main.type, { show: item })}
                </Typography>
                <Typography variant={'h5'}>
                  {t(langTokens.main.genre, { genre })}
                </Typography>
                {item?.rating.average && (
                  <Rating
                    defaultValue={item?.rating.average}
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
              {ReactHtmlParser(item?.summary)}
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
          {!!item?._embedded?.cast && (
            <ListItems
              items={personArray(item?._embedded?.cast)}
              autoPaginationDisable
              clickHandler={handlerClick}
            />
          )}
        </div>
      </Route>
      <Route path={`${match.url}/episodes`}>
        {!!episodes && <ShowEpisodes episodes={episodes} name={item?.name} />}
      </Route>
      <Redirect to={routs.error404.path} />
    </Switch>
  );
};
