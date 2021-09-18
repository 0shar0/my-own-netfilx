import React from 'react';
import {Box, Fade, Input, Modal, useTheme} from '@material-ui/core';
import {useStyles} from './LoginModal.style';
import {CustomButton} from '../CustomButton/CustomButton';

export const LoginModal = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const classes = useStyles();

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
          <Input />
          <Input />
          <CustomButton
            text={'Submit'}
            handleClick={() => console.log('submit')}
          />
          <CustomButton
            text={'Register'}
            handleClick={() => console.log('reg')}
          />
        </Box>
      </Fade>
    </Modal>
  );
};
