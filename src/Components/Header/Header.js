import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { useStyles } from './Header.styles';
import { useTranslation } from 'react-i18next';
import { langTokens } from '../../Locales/localization';
import { MAIN_IMAGE } from '../../Constant/Main';
import { Navbar } from '../Navbar/Navbar';

export const Header = () => {
  const classes = useStyles({
    img: MAIN_IMAGE,
  });
  const { t } = useTranslation();

  return (
    <>
      <Box className={classes.header}>
        <Box>
          <Typography variant={'h1'} className={classes.name}>
            {t(langTokens.main.name)}
          </Typography>
        </Box>
        <Button classes={{ root: classes.rootButton }}>
          {t(langTokens.main.login)}
        </Button>
      </Box>
      <Navbar />
    </>
  );
};
