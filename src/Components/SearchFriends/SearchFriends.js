import React, { useContext, useEffect, useState } from 'react';
import { friendsRequest, getAllUsers } from '../../Api/userApi';
import { ListItems } from '../ListItems/ListItems';
import { Typography } from '@material-ui/core';
import { langTokens } from '../../Locales/localization';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

const SearchFriends = () => {
  const { currentUser } = useContext(AuthContext);
  const { t } = useTranslation();
  const [users, setUsers] = useState([]);

  const handleClick = (id) => {
    friendsRequest(id);
  };

  useEffect(() => {
    getAllUsers().then((r) =>
      setUsers(
        r
          .filter((user) => {
            return currentUser.id !== user.id;
          })
          .filter((user) => {
            return !currentUser.friends.some((friend) => friend.id === user.id);
          }),
      ),
    );
  }, []);

  return (
    <div>
      <Typography variant={'h2'}>{t(langTokens.main.users)}</Typography>
      <ListItems items={users} clickHandler={handleClick} />
    </div>
  );
};

export default SearchFriends;
