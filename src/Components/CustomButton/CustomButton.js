import React from 'react';
import { useStyles } from './CustomButton.styles';
import { Button } from '@material-ui/core';

export const CustomButton = ({ handleClick, text, style }) => {
  const classes = useStyles();
  return (
    <Button
      style={style}
      onClick={handleClick}
      classes={{ root: classes.rootButton }}
    >
      {text}
    </Button>
  );
};
