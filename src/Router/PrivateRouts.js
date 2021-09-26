import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Page } from '../Components/Page';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';

export const PrivateRouts = ({ path, exact, component }) => {
  const {authenticated} = useContext(AuthContext);
  if (authenticated) {
    return (
      <Route path={path} exact={exact}>
        <Page component={component} />
      </Route>
    );
  }
  return <Redirect to="/error_404" />;
};
