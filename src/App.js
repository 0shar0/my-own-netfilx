import React from 'react';
import {Header} from './Components/Header/Header';
import {RootProvider} from './Provider/RootProvider';
import {BrowserRouter} from 'react-router-dom';
import {AppRouts} from './Router/AppRouts';
import {routs} from './Router/Routs';

export const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <RootProvider>
          <Header />
          <AppRouts routs={routs}/>
        </RootProvider>
      </BrowserRouter>
    </div>
  );
};
