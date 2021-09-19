import React from 'react';
import { useStyles } from './Page404.style';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { langTokens } from '../../Locales/localization';

const Page404 = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.container}>
      <Typography variant={'h1'}>{t(langTokens.main.page404)}</Typography>
      <Typography variant={'h1'}>{t(langTokens.main.notFound)}</Typography>
    </div>
  );
};
export default Page404;
