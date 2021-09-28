import React from 'react';
import { useStyles } from './AboutPage.styles';
import { Box, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { langTokens } from '../../Locales/localization';

const AboutPage = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div className={classes.root}>
      <Typography variant={'h2'}>{t(langTokens.about.name)}</Typography>
      <Box className={classes.textWrapper}>
        <Typography className={classes.textHeader} variant={'h3'}>
          {t(langTokens.about.used)}
        </Typography>
        <div>
          <Typography variant={'h6'}>{t(langTokens.about.front)}</Typography>
          <Typography variant={'h6'}>{t(langTokens.about.back)}</Typography>
        </div>
      </Box>
      <Box className={classes.textWrapper}>
        <Typography className={classes.textHeader} variant={'h3'}>
          {t(langTokens.about.source)}
        </Typography>
        <div>
          <a href="https://github.com/0shar0/my-own-netfilx">
            <Typography variant={'h6'}>
              {t(langTokens.about.frontSource)}
            </Typography>
          </a>
          <a href="https://github.com/0shar0/my-own-netflix-be">
            <Typography variant={'h6'}>
              {t(langTokens.about.backSource)}
            </Typography>
          </a>
        </div>
      </Box>
      <Box className={classes.textWrapper}>
        <Typography className={classes.textHeader} variant={'h3'}>
          {t(langTokens.about.social)}
        </Typography>
        <div>
          <a href="https://www.linkedin.com/in/bohdan-sharko-399305205/">
            <Typography variant={'h6'}>{t(langTokens.about.linked)}</Typography>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100010221435008">
            <Typography variant={'h6'}>{t(langTokens.about.face)}</Typography>
          </a>
        </div>
      </Box>
    </div>
  );
};

export default AboutPage;
