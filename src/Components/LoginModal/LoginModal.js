import React, { useContext, useState } from 'react';
import { Box, Fade, Input, Modal, useTheme } from '@material-ui/core';
import { useStyles } from './LoginModal.style';
import { CustomButton } from '../CustomButton/CustomButton';
import { langTokens } from '../../Locales/localization';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

export const LoginModal = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const classes = useStyles();
  const { t } = useTranslation();
  const { authenticated, currentUser } = useContext(AuthContext);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const login = (email, password) => {
    authenticated
      .signInWithEmailAndPassword(email, password)
      .then(setOpen(false))
      .catch((e) => console.error(e));
  };

  const createUser = (email, password) => {
    if (email && password) {
      if (password.length >= 6) {
        authenticated
          .createUserWithEmailAndPassword(email, password)
          .then(setOpen(false))
          .catch((e) => console.error(e));
      } else {
      }
    }
  };

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
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type={'password'}
            placeholder={t(langTokens.main.password)}
            className={classes.input}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={classes.buttonContainer}>
            <CustomButton
              text={t(langTokens.main.submit)}
              handleClick={() => login(email, password)}
            />
            <CustomButton
              text={t(langTokens.main.reg)}
              handleClick={() => createUser(email, password)}
            />
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};
