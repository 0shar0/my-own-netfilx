import React, { useEffect, useState } from 'react';
import {
  Link,
  Route,
  Switch,
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

const ShowPage = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const match = useRouteMatch();
  const [show, setShow] = useState();
  const [boundGetEpisodes] = useAction([fetchEpisodes]);
  const episodes = useSelector(selectEpisodes);
  const genre = show?.genres.join(' | ');

  useEffect(() => {
    getShowsById(id).then((response) => setShow(response.data));
    boundGetEpisodes(id);
  }, []);

  console.log(episodes[0]);

  return (
    <Switch>
      <Route exact path={match.path}>
        <div style={{ color: 'white' }}>
          <Typography variant={'h2'}>{show?.name}</Typography>
          <div>
            <img src={show?.image?.medium} alt="logo" />
            <Typography variant={'h6'}>
              {ReactHtmlParser(show?.summary)}
            </Typography>
          </div>
          <div>
            <Card>
              <CardContent>
                <Typography variant={'h3'}>
                  {t(langTokens.main.showInfo)}
                </Typography>
                <Typography variant={'h5'}>
                  {t(langTokens.main.webChannel, { show })}
                </Typography>
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
            <div>
              {!!episodes && (
                <>
                  <Typography variant={'h3'}>
                    {t(langTokens.main.lastEpisodes)}
                  </Typography>
                  <EpisodesTable episodes={episodes.slice(-3)} />
                </>
              )}
              <Link
                style={{ textDecoration: 'none' }}
                to={`${match.url}/episodes`}
              >
                <CustomButton text={t(langTokens.main.showAllEpisodes)} />
              </Link>
            </div>
          </div>
        </div>
      </Route>
      <Route path={`${match.url}/episodes`}>
        {!!episodes && <ShowEpisodes episodes={episodes} name={show?.name} />}
      </Route>
    </Switch>
  );
};

export default ShowPage;
