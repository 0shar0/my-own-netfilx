import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getShowsById } from '../../../Api/api';

const ShowsPage = () => {
  const { id } = useParams();
  const [show, setShow] = useState();

  useEffect(() => {
    getShowsById(id).then((response) => setShow(response.data));
  }, []);

  console.log(show);

  return <div style={{ color: 'white' }}>showsPage</div>;
};

export default ShowsPage;
