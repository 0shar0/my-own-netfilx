import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { MAIN_THEME } from '../Styles/Theme';
import { AuthProvider } from './AuthProvider/AuthProvider';

export const RootProvider = ({ children }) => {
  return (
    <>
      <MuiThemeProvider theme={MAIN_THEME}>
        <AuthProvider>{children}</AuthProvider>
      </MuiThemeProvider>
    </>
  );
};
