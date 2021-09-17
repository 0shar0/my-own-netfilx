import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { MAIN_THEME } from '../Styles/Theme';

export const RootProvider = ({ children }) => {
  return (
    <>
      <MuiThemeProvider theme={MAIN_THEME}>
        {children}
      </MuiThemeProvider>
    </>
  );
};
