import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { PrivateRouts } from './PrivateRouts';
import { Page } from '../Components/Page';
import { routs } from '../Constant/Routing';

export const AppRouts = ({ routerConfig }) => {
  return (
    <>
      <Switch>
        {routerConfig.map((rout) => {
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
        <Redirect to={routs.error404.path} />
      </Switch>
    </>
  );
};
