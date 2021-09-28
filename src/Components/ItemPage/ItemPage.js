import React from 'react';
import { Link, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { langTokens } from '../../Locales/localization';
import ReactHtmlParser from 'react-html-parser';
import { EpisodesTable } from '../Shows/ShowPage/ShowEpisodes/ShowEpisodesTable/EpisodesTable';
import { CustomButton } from '../CustomButton/CustomButton';
import { ListItems } from '../ListItems/ListItems';
import { ShowEpisodes } from '../Shows/ShowPage/ShowEpisodes/ShowEpisodes';
import { routs } from '../../Constant/Routing';
import { useStyles } from './ItemPage.style';
import { useTranslation } from 'react-i18next';
import { InfoCard } from '../InfoCard/InfoCard';
import Page404 from '../Page404/Page404';

export const ItemPage = ({ item, episodes, handlerClick, loaded }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const match = useRouteMatch();

  const personArray = (personAndCharacter) => {
    return personAndCharacter.map((p) => {
      const { person, character } = p;
      return { ...character, id: person.id };
    });
  };

  return (
    <>
      {loaded ? (
        <Switch>
          <Route exact path={match.path}>
            <div className={classes.root}>
              <Typography variant={'h2'}>{item?.name}</Typography>
              <div className={classes.imgContainer}>
                <img src={item?.image?.medium} alt="logo" />
                <InfoCard item={item} />
              </div>
              <div className={classes.summary}>
                <Typography variant={'h3'}>
                  {t(langTokens.main.summary)}
                </Typography>
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
              {!item?._embedded?.cast && (
                <Typography variant={'h3'}>
                  {t(langTokens.main.cast)}
                </Typography>
              )}
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
            {!!episodes && (
              <ShowEpisodes episodes={episodes} name={item?.name} />
            )}
          </Route>
          <Redirect to={routs.error404.path} />
        </Switch>
      ) : (
        <Page404 />
      )}
    </>
  );
};
