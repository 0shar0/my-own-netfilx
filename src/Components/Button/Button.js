import React from 'react';
import { useStyles } from './Button.styles';

export const Button = ({ handleClick, text }) => {
  const classes = useStyles();
  return (
    <Button onClick={handleClick} classes={{ root: classes.rootButton }}>
      {text}
    </Button>
  );
};
