import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getShowsById, getShowsEpisodes } from '../../../Api/api';
import {
  Card,
  CardContent,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import ReactHtmlParser from 'react-html-parser';
import { useTranslation } from 'react-i18next';
import { langTokens } from '../../../Locales/localization';
import { Rating } from '@material-ui/lab';

const ShowsPage = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [show, setShow] = useState();
  const [episodes, setEpisodes] = useState();
  const genre = show?.genres.join(' | ');

  useEffect(() => {
    getShowsById(id).then((response) => setShow(response.data));
    getShowsEpisodes(id).then((response) => setEpisodes(response.data));
  }, []);

  return (
    <div style={{ color: 'white' }}>
      <Typography variant={'h2'}>{show?.name}</Typography>
      <div>
        <img src={show?.image?.medium} alt="logo" />
        <Typography variant={'h6'} component={'p'}>
          {ReactHtmlParser(show?.summary)}
        </Typography>
      </div>
      <div>
        <Card>
          <CardContent>
            <Typography variant={'h3'} component={'p'}>
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
        {!!episodes && (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant={'h4'}>
                      {t(langTokens.main.episodeName)}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant={'h4'}>
                      {t(langTokens.main.airDate)}
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {episodes.slice(-5).map((episode) => (
                  <>
                    <TableRow>
                      <TableCell>
                        <Typography variant={'h6'}>{episode.name}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant={'h6'}>
                          {episode.airdate.split('-').reverse().join('.')}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </div>
  );
};

export default ShowsPage;
