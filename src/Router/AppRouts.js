import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PrivateRouts } from './PrivateRouts';
import { Page } from '../Components/Page';
import Page404 from '../Components/Page404/Page404';

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
        <Route>
          <Page component={Page404} />
        </Route>
      </Switch>
    </>
  );
};
