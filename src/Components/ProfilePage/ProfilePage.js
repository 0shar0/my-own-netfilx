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

const ProfilePage = () => {
  const classes = useStyles();
  const history = useHistory();
  const { t } = useTranslation();
  const { currentUser } = useContext(AuthContext);
  const { likedShows } = currentUser;
  const [shows, setShows] = useState([]);

  const handleClick = () => {
    history.push(routs.friends.path);
  };

  useEffect(() => {
    Promise.all(likedShows.map((id) => getShowsById(id))).then((res) =>
      setShows(res.map((r) => r.data)),
    );
  }, [likedShows]);

  return (
    <div className={classes.root}>
      <CustomButton
        className={classes.friendsButton}
        text={t(langTokens.main.findFriends)}
        handleClick={handleClick}
      />
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
      {!!currentUser.friends?.length && (
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
            items={shows}
            clickHandler={(id) => {}}
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
