import React from 'react';
import { useNavbar } from '../../Constant/Navbar';
import { NavLink } from 'react-router-dom';
import { useStyles } from './Navbar.styles';

export const Navbar = () => {
  const classes = useStyles();
  const navButtons = useNavbar();

  return (
    <ul className={classes.root}>
      {navButtons.map((button) => (
        <li key={button.id}>
          <NavLink to={button.url}>{button.label}</NavLink>
        </li>
      ))}
    </ul>
  );
};
