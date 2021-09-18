import React from 'react';
import {useNavbar} from '../../Hooks/useNavbar';
import {NavLink} from 'react-router-dom';
import {useStyles} from './Navbar.styles';

export const Navbar = () => {
  const classes = useStyles();
  const navButtons = useNavbar();

  return (
    <ul className={classes.root}>
      {navButtons.map((button) => (
        <li key={button.id}>
          <NavLink
            className={classes.link}
            activeStyle={{ borderBottom: 'solid black 2px' }}
            to={button.url}
          >
            {button.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
