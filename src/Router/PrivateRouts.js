import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {Page} from '../Components/Page';

export const PrivateRouts = ({ path, exact, component }) => {
  if (true) {
    return (
      <Route path={path} exact={exact}>
        <Page component={component} />
      </Route>
    );
  }
  return <Redirect to="/error_404" />;
};
