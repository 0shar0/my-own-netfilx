import React, { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchRequests, selectRequests } from '../../Reducer/requests';
import { useAction } from '../../Hooks/useAction';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { ListItems } from '../ListItems/ListItems';
import { acceptFriendsRequest } from '../../Api/userApi';

const RequestPage = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const { requests, requested } = useSelector(selectRequests);
  const [boundFetchRequests] = useAction([fetchRequests]);

  useEffect(() => {
    if (!requested) {
      boundFetchRequests(currentUser.id);
    }
  }, []);

  const clickHandler = (id) => {
    acceptFriendsRequest(id).then((r) => setCurrentUser(r));
  };

  return (
    <div style={{ color: 'white' }}>
      <ListItems items={requests} clickHandler={clickHandler} />
    </div>
  );
};

export default RequestPage;
