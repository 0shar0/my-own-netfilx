import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { langTokens } from '../../../Locales/localization';
import { useStyles } from './Schedule.style';
import { useHistory } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';

export const Schedule = ({ schedule }) => {
  const classes = useStyles();
  const history = useHistory();
  const { t } = useTranslation();

  const columns = [
    {
      field: 'name',
      headerName: 'Name',
      width: 300,
      editable: false,
      sortable: false,
    },
    { field: 'season', headerName: 'Season', editable: false, sortable: false },
    {
      field: 'number',
      headerName: 'Episode',
      editable: false,
      sortable: false,
    },
    {
      field: 'airtime',
      headerName: 'Time',
      editable: false,
      sortable: false,
    },
  ];

  const rows = schedule.map(({ name, id, airtime, season, number }) => ({
    id,
    name,
    season,
    number,
    airtime,
  }));

  return (
    <Box className={classes.container}>
      <Typography variant={'h2'}>{t(langTokens.main.schedule)}</Typography>
      <DataGrid
        className={classes.dataGrid}
        classes={{
          cell: classes.cell,
        }}
        onRowClick={(e) => history.push(`/`)}
        autoHeight
        rows={rows}
        columns={columns}
        hideFooter
        disableColumnMenu
        disableSelectionOnClick
      />
    </Box>
  );
};
