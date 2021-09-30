import React, { useContext, useEffect, useState } from 'react';
import { useStyles } from './ProfilePage.style';
import { Box, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { NO_IMAGE } from '../../Constant/Main';
import { InfoCard } from '../InfoCard/InfoCard';
import { langTokens } from '../../Locales/localization';
import { getShowsById } from '../../Api/api';
import { ListItems } from '../ListItems/ListItems';
import { useHistory } from 'react-router-dom';
import { CustomButton } from '../CustomButton/CustomButton';
import { routs } from '../../Constant/Routing';
import { useAction } from '../../Hooks/useAction';
import { fetchRequests, selectRequests } from '../../Reducer/requests';
import { useSelector } from 'react-redux';
import { deleteFriends, getFriends } from '../../Api/userApi';

const ProfilePage = () => {
  const classes = useStyles();
  const history = useHistory();
  const { t } = useTranslation();
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const { likedShows } = currentUser;
  const [shows, setShows] = useState([]);
  const [friends, setFriends] = useState([]);
  const [boundFetchRequests] = useAction([fetchRequests]);
  const { requests } = useSelector(selectRequests);

  const allUsers = () => {
    history.push(routs.users.path);
  };
  const userFriends = () => {
    history.push(routs.request.path);
  };

  useEffect(() => {
    Promise.all(likedShows.map((id) => getShowsById(id))).then((res) =>
      setShows(res.map((r) => r.data)),
    );
    if (currentUser.friends.length) {
      getFriends(currentUser.friends).then((r) => setFriends(r));
    }
    boundFetchRequests(currentUser.id);
  }, [likedShows]);

  return (
    <div className={classes.root}>
      <div className={classes.friendsButton}>
        <CustomButton
          style={{ marginBottom: 0 }}
          text={t(langTokens.main.findFriends)}
          handleClick={allUsers}
        />
        {!!requests?.length && (
          <CustomButton
            style={{ margin: '1px' }}
            text={t(langTokens.main.userFriends)}
            handleClick={userFriends}
          />
        )}
      </div>
      <Typography className={classes.title} variant={'h2'}>
        {currentUser.email}
      </Typography>
      <Box width="100%" display="flex" justifyContent="space-around">
        <label>
          <img
            className={classes.image}
            src={currentUser.image || NO_IMAGE}
            alt="userImage"
          />
          <input className={classes.input} type="file" />
        </label>
        <InfoCard />
      </Box>
      {!!currentUser.friends.length && (
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Typography className={classes.title} variant={'h3'}>
            {t(langTokens.main.friends)}
          </Typography>
          <ListItems
            autoPaginationDisable
            items={friends}
            clickHandler={(id) => {
              deleteFriends(id).then((r) => setCurrentUser(r));
            }}
          />
        </Box>
      )}
      {!!currentUser.likedShows.length && (
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Typography className={classes.title} variant={'h3'}>
            {t(langTokens.main.likedPosts)}
          </Typography>
          <ListItems
            autoPaginationDisable
            items={shows}
            clickHandler={(id) => {
              history.push(`/shows/${id}`);
            }}
          />
        </Box>
      )}
    </div>
  );
};

export default ProfilePage;
