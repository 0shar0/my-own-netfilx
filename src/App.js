import React from 'react';
import { Header } from './Components/Header/Header';
import { RootProvider } from './Provider/RootProvider';

export const App = () => {
  return (
    <>
      <RootProvider>
        <Header />
      </RootProvider>
    </>
  );
};
