import React from 'react';
import { Container } from '@material-ui/core';

export const Page = (props) => {
  return (
    <Container>
      <props.component />
    </Container>
  );
};
