import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { PrivateRouts } from './PrivateRouts';
import { Page } from '../Components/Page';

export const AppRouts = ({ routs }) => {
  return (
    <>
      <Switch>
        {routs.map((rout) => {
          if (rout.private) {
            return (
              <PrivateRouts
                key={rout.key}
                path={rout.path}
                exact={rout.exact}
                component={rout.component}
              />
            );
          }
          return (
            <Route key={rout.key} path={rout.path} exact={rout.exact}>
              <Page component={rout.component} />
            </Route>
          );
        })}
        <Redirect to={'/error_404'} />
      </Switch>
    </>
  );
};
