import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPeopleById } from '../../../Api/api';
import {ItemPage} from '../../ItemPage/ItemPage';

const PeoplePage = () => {
  const params = useParams();
  const [person, setPerson] = useState();

  useEffect(() => {
    getPeopleById(params.id).then((response) => setPerson(response.data));
  }, []);

  return <ItemPage
      item={person}
  />;
};

export default PeoplePage;
