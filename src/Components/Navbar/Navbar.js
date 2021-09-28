import React, { useContext } from 'react';
import { useNavbar } from '../../Hooks/useNavbar';
import { NavLink } from 'react-router-dom';
import { useStyles } from './Navbar.styles';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

export const Navbar = () => {
  const classes = useStyles();
  const navButtons = useNavbar();
  const { auth } = useContext(AuthContext);

  return (
    <ul className={classes.root}>
      {navButtons.map((button) => {
        if (button.protected && !auth) {
          return null;
        }
        return (
          <li key={button.id}>
            <NavLink
              className={classes.link}
              activeStyle={{ borderBottom: 'solid black 2px' }}
              to={button.url}
            >
              {button.label}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
