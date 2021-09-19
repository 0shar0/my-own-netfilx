import React, { Suspense } from 'react';
import { Header } from './Components/Header/Header';
import { RootProvider } from './Provider/RootProvider';
import { BrowserRouter } from 'react-router-dom';
import { AppRouts } from './Router/AppRouts';
import { routs } from './Router/Routs';
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
            <AppRouts routs={routs} />
          </Suspense>
        </RootProvider>
      </BrowserRouter>
    </div>
  );
};
