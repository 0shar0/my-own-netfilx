import React, { useContext, useState } from 'react';
import { Box, Fade, Input, Modal, useTheme } from '@material-ui/core';
import { useStyles } from './LoginModal.style';
import { CustomButton } from '../CustomButton/CustomButton';
import { langTokens } from '../../Locales/localization';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { registration, signIn } from '../../Api/userApi';
import { useHistory } from 'react-router-dom';
import { routs } from '../../Constant/Routing';

export const LoginModal = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const history = useHistory();
  const classes = useStyles();
  const { t } = useTranslation();
  const { setCurrentUser } = useContext(AuthContext);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const login = () => {
    signIn({ email, password }).then((r) => {
      setOpen(false);
      setCurrentUser(r);
      history.push(routs.profile.path);
    });
  };

  const createUser = () => {
    registration({ email, password }).then((r) => {
      setOpen(false);
      setCurrentUser(r);
    });
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
            type={'email'}
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
              handleClick={login}
            />
            <CustomButton
              text={t(langTokens.main.reg)}
              handleClick={createUser}
            />
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};
