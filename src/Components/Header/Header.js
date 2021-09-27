import React, { useContext, useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import { useStyles } from './Header.styles';
import { useTranslation } from 'react-i18next';
import { langTokens } from '../../Locales/localization';
import { MAIN_IMAGE } from '../../Constant/Main';
import { Navbar } from '../Navbar/Navbar';
import { LoginModal } from '../LoginModal/LoginModal';
import { CustomButton } from '../CustomButton/CustomButton';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { useHistory } from 'react-router-dom';

export const Header = () => {
  const classes = useStyles({
    img: MAIN_IMAGE,
  });
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const { auth, setCurrentUser } = useContext(AuthContext);
  const handleOpen = () => setOpen(true);

  const logout = async () => {
    setOpen(false);
    setCurrentUser(null);
    localStorage.removeItem('token');
    history.push('/');
  };

  return (
    <>
      <Box className={classes.header}>
        <Box>
          <Typography variant={'h1'} className={classes.nameContainer}>
            {t(langTokens.main.name)}
          </Typography>
        </Box>
        {!auth ? (
          <CustomButton
            handleClick={handleOpen}
            text={t(langTokens.main.login)}
          />
        ) : (
          <CustomButton handleClick={logout} text={t(langTokens.main.logout)} />
        )}
      </Box>
      <Navbar />
      <LoginModal open={open} setOpen={setOpen} />
    </>
  );
};
