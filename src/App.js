import React from 'react';
import { Header } from './Components/Header/Header';
import { RootProvider } from './Provider/RootProvider';
import {BrowserRouter} from 'react-router-dom';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <RootProvider>
          <Header />
        </RootProvider>
      </BrowserRouter>
    </>
  );
};
