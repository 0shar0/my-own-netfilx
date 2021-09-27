import React, { Suspense } from 'react';
import { Header } from './Components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import { AppRouts } from './Router/AppRouts';
import { routerConfig } from './Router/Routs';
import { CircularProgress } from '@material-ui/core';

export const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
};
