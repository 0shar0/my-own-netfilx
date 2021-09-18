import React from 'react';
import {Box, Fade, Input, Modal, useTheme} from '@material-ui/core';
import {useStyles} from './LoginModal.style';
import {CustomButton} from '../CustomButton/CustomButton';
import {langTokens} from '../../Locales/localization';
import {useTranslation} from 'react-i18next';

export const LoginModal = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const classes = useStyles();
  const { t } = useTranslation();

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: theme.palette.secondary.main,
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Input
            placeholder={t(langTokens.main.email)}
            className={classes.input}
          />
          <Input
            type={'password'}
            placeholder={t(langTokens.main.password)}
            className={classes.input}
          />
          <div className={classes.buttonContainer}>
            <CustomButton
              text={t(langTokens.main.submit)}
              handleClick={() => console.log('submit')}
            />
            <CustomButton
              text={t(langTokens.main.reg)}
              handleClick={() => console.log('reg')}
            />
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};
