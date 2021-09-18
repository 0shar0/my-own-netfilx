import React from 'react';
import {useStyles} from './CustomButton.styles';
import {Button} from '@material-ui/core';

export const CustomButton = ({ handleClick, text }) => {
  const classes = useStyles();
  return (
    <Button onClick={handleClick} classes={{ root: classes.rootButton }}>
      {text}
    </Button>
  );
};
