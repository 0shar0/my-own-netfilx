import { createTheme } from '@material-ui/core';
import { palette } from './palette';
import { typography } from './typography';

export const MAIN_THEME = createTheme({
  spacing: 5,
  palette,
  typography,
});
