import React from 'react';
import { Redirect } from 'react-router-dom';
import { routs } from '../../Constant/Routing';

const SearchFriends = () => {
  return <Redirect to={routs.error404.path} />;
};

export default SearchFriends;
