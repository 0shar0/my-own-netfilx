import React from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import { useStyles } from './Header.styles';
import { useTranslation } from 'react-i18next';
import { langTokens } from '../../Locales/localization';
import { MAIN_IMAGE } from '../../Constant/Main';

export const Header = () => {
  const classes = useStyles({
    img: MAIN_IMAGE,
  });
  const { t } = useTranslation();

  return (
    <Container className={classes.header}>
      <Box>
        <Typography variant={'h1'} className={classes.name}>{t(langTokens.main.name)}</Typography>
      </Box>
    </Container>
  );
};
