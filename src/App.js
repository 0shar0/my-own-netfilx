import React, { Suspense, useEffect } from 'react';
import { Header } from './Components/Header/Header';
import { RootProvider } from './Provider/RootProvider';
import { BrowserRouter, useHistory } from 'react-router-dom';
import { AppRouts } from './Router/AppRouts';
import { routerConfig } from './Router/Routs';
import { CircularProgress } from '@material-ui/core';

export const App = () => {

  return (
    <div className="app">
      <BrowserRouter>
        <RootProvider>
          <Header />
          <Suspense
            fallback={
              <div className="mainLoading">
                <CircularProgress />
              </div>
            }
          >
            <AppRouts routerConfig={routerConfig} />
          </Suspense>
        </RootProvider>
      </BrowserRouter>
    </div>
  );
};
