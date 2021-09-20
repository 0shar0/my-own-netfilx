import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import { langTokens } from '../../../../Locales/localization';
import { useTranslation } from 'react-i18next';
import { reverse } from '../../../../Constant/Functions';

export const EpisodesTable = ({ episodes }) => {
  const { t } = useTranslation();
  return (
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
          {reverse(episodes).map((episode, index, array) => (
            <React.Fragment key={episode.id}>
              {episode?.season !== array[index - 1]?.season && (
                <TableRow>
                  <TableCell>
                    <Typography variant={'h6'}>
                      {t(langTokens.main.season) + episode.season}
                    </Typography>
                  </TableCell>
                  <TableCell />
                </TableRow>
              )}
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
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
