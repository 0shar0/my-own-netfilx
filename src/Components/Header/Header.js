import React, { useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import { useStyles } from './Header.styles';
import { useTranslation } from 'react-i18next';
import { langTokens } from '../../Locales/localization';
import { MAIN_IMAGE } from '../../Constant/Main';
import { Navbar } from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import { LoginModal } from '../LoginModal/LoginModal';
import { CustomButton } from '../CustomButton/CustomButton';
import { routs } from '../../Constant/Routing';

export const Header = () => {
  const classes = useStyles({
    img: MAIN_IMAGE,
  });
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  return (
    <>
      <Box className={classes.header}>
        <Box>
          <Typography variant={'h1'} className={classes.nameContainer}>
            <Link to={routs.main.path} className={classes.name}>
              {t(langTokens.main.name)}
            </Link>
          </Typography>
        </Box>
        <CustomButton
          handleClick={handleOpen}
          text={t(langTokens.main.login)}
        />
      </Box>
      <Navbar />
      <LoginModal open={open} setOpen={setOpen} />
    </>
  );
};
