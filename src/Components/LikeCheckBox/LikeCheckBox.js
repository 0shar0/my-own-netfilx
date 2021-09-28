import React, { useContext } from 'react';
import { Checkbox } from '@material-ui/core';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import { putLike } from '../../Api/userApi';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

export const LikeCheckBox = ({ id }) => {
  const { currentUser, auth, setCurrentUser } = useContext(AuthContext);

  const isChecked =
    !!currentUser?.likedShows && currentUser.likedShows.some((el) => el === id);

  const like = () => {
    putLike({
      ...currentUser,
      likedShows: [...currentUser.likedShows, id],
    }).then((r) => setCurrentUser(r));
  };

  const unLike = () => {
    putLike({
      ...currentUser,
      likedShows: [...currentUser.likedShows.filter((el) => el !== id)],
    }).then((r) => setCurrentUser(r));
  };

  return (
    <>
      {auth && (
        <Checkbox
          onChange={isChecked ? unLike : like}
          checked={isChecked}
          inputProps={'aria-label'}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
        />
      )}
    </>
  );
};
