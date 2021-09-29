import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
    '& .MuiDataGrid-dataContainer': {
      minWidth: '590px !important',
    },
  },
  dataGrid: {
    margin: theme.spacing(5),
    width: '600px',
    color: `${theme.palette.primary.white} !important`,
  },
  cell: {
    cursor: 'pointer',
  },
}));
