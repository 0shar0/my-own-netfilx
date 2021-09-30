import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getShowsById } from '../../../Api/api';
import { fetchEpisodes } from '../../../Reducer/episodes';
import { useAction } from '../../../Hooks/useAction';
import { useSelector } from 'react-redux';
import { selectEpisodes } from '../../../Reducer/episodes/selectors';
import { ItemPage } from '../../ItemPage/ItemPage';

const ShowPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const [show, setShow] = useState();
  const [loaded, setLoaded] = useState(true);
  const [boundGetEpisodes] = useAction([fetchEpisodes]);
  const episodes = useSelector(selectEpisodes);

  const handlerPersonClick = (CurrentId) => {
    history.push(`/people/${CurrentId}`);
  };

  useEffect(() => {
    getShowsById(id)
      .then((response) => {
        setShow(response.data);
        return response;
      })
      .catch(() => setLoaded(false));
    boundGetEpisodes(id);
  }, []);

  return (
    <ItemPage
      show={true}
      item={show}
      handlerClick={handlerPersonClick}
      loaded={loaded}
      episodes={episodes}
    />
  );
};

export default ShowPage;
