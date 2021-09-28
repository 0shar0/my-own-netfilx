import React, { useContext } from 'react';
import {
  Box,
  Card,
  CardContent,
  Checkbox,
  Typography,
} from '@material-ui/core';
import { langTokens } from '../../Locales/localization';
import { Rating } from '@material-ui/lab';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import { putLike } from '../../Api/userApi';

export const InfoCard = ({ item }) => {
  const { currentUser, auth, setCurrentUser } = useContext(AuthContext);
  const { t } = useTranslation();
  const genre = (itemGenres) => itemGenres.join(' | ');

  const getBirthday = (birthday) => {
    return birthday.split('-').reverse().join('.');
  };

  const isChecked =
    !!currentUser?.likedShows &&
    currentUser.likedShows.some((el) => el === item?.id);

  const like = () => {
    putLike({
      ...currentUser,
      likedShows: [...currentUser.likedShows, item.id],
    }).then((r) => setCurrentUser(r));
  };

  const unLike = () => {
    putLike({
      ...currentUser,
      likedShows: [...currentUser.likedShows.filter((el) => el !== item.id)],
    }).then((r) => setCurrentUser(r));
  };

  return (
    <Card>
      <CardContent>
        <Box display={'flex'} justifyContent="space-between">
          <Typography variant={'h3'}>{t(langTokens.main.showInfo)}</Typography>
          {auth && (
            <Checkbox
              onChange={isChecked ? unLike : like}
              checked={isChecked}
              inputProps={'aria-label'}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
            />
          )}
        </Box>
        {item?.runtime && (
          <Typography variant={'h5'}>
            {t(langTokens.main.average, { show: item })}
          </Typography>
        )}
        {item?.webChannel && (
          <Typography variant={'h5'}>
            {t(langTokens.main.webChannel, { show: item })}
          </Typography>
        )}
        {item?.type && (
          <Typography variant={'h5'}>
            {t(langTokens.main.type, { show: item })}
          </Typography>
        )}
        {item?.status && (
          <Typography variant={'h5'}>
            {t(langTokens.main.status, { show: item })}
          </Typography>
        )}
        {item?.genres && (
          <Typography variant={'h5'}>
            {t(langTokens.main.genre, { genre: genre(item?.genres) })}
          </Typography>
        )}
        {item?.rating?.average && (
          <Rating
            defaultValue={item?.rating?.average}
            max={10}
            readOnly
            precision={0.1}
          />
        )}
        {item?.country?.name && (
          <Typography variant={'h5'}>
            {t(langTokens.main.country, { name: item?.country?.name })}
          </Typography>
        )}
        {item?.gender && (
          <Typography variant={'h5'}>
            {t(langTokens.main.gender, { gender: item?.gender })}
          </Typography>
        )}
        {item?.birthday && (
          <Typography variant={'h5'}>
            {t(langTokens.main.birthday, {
              birthday: getBirthday(item?.birthday),
            })}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};
