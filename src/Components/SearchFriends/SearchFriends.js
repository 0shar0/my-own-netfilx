import React, { useContext, useEffect, useState } from 'react';
import { friendsRequest, getAllUsers } from '../../Api/userApi';
import { ListItems } from '../ListItems/ListItems';
import { Box, Typography } from '@material-ui/core';
import { langTokens } from '../../Locales/localization';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { CustomButton } from '../CustomButton/CustomButton';
import { useSelector } from 'react-redux';
import { fetchRequests, selectRequests } from '../../Reducer/requests';
import { useAction } from '../../Hooks/useAction';

const SearchFriends = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const { requests, requested } = useSelector(selectRequests);
  const [boundFetchRequests] = useAction([fetchRequests]);

  const { t } = useTranslation();
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const handleClick = (id) => {
    friendsRequest(id);
  };

  useEffect(() => {
    if (!requested) {
      boundFetchRequests(currentUser.id);
    }
  }, []);

  useEffect(() => {
    getAllUsers(page, currentUser.id).then((r) =>
      setUsers(
        r
          .filter((user) => {
            return currentUser.id !== user.id;
          })
          .filter((user) => {
            return !currentUser.friends.some((friend) => friend.id === user.id);
          })
          .filter((user) => {
            return !requests.some((r) => r.id === user.id);
          }),
      ),
    );
  }, [page]);

  return (
    <>
      {!!users.length ? (
        <>
          <div>
            <Typography variant={'h2'}>{t(langTokens.main.users)}</Typography>
            <ListItems items={users} clickHandler={handleClick} />
          </div>
          {users.length > 12 && (
            <CustomButton
              text={t(langTokens.main.loadMore)}
              handleClick={() => {
                setPage((p) => p + 1);
              }}
            />
          )}
        </>
      ) : (
        <Box
          width="100%"
          height="80vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography style={{ color: 'white' }} variant={'h2'}>
            {t(langTokens.main.noUsers)}
          </Typography>
        </Box>
      )}
    </>
  );
};

export default SearchFriends;
