import React from 'react';
import { useStyles } from './CustomButton.styles';
import { Button } from '@material-ui/core';

export const CustomButton = ({ handleClick, text, className }) => {
  const classes = useStyles();
  return (
    <Button
      className={className}
      onClick={handleClick}
      classes={{ root: classes.rootButton }}
    >
      {text}
    </Button>
  );
};
