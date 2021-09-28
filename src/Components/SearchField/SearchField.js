import React, { useState } from 'react';
import { Button, Input, Menu, MenuItem } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './SearchField.styles';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { langTokens } from '../../Locales/localization';

export const SearchField = () => {
  const [searchInput, setSearchInput] = useState(null);
  const [value, setValue] = useState('');
  const history = useHistory();
  const classes = useStyles();
  const { t } = useTranslation();

  const searchHandler = () => {
    if (value) {
      setSearchInput(null);
      history.push(`/search/${value}`);
    }
  };

  return (
    <>
      <Button
        className={classes.button}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={(e) => setSearchInput(e.currentTarget)}
      >
        <SearchIcon className={classes.searchIcon} />
      </Button>
      <Menu
        classes={{
          list: classes.label,
          paper: classes.paper,
        }}
        id="simple-menu"
        anchorEl={searchInput}
        keepMounted
        open={Boolean(searchInput)}
        onClose={() => setSearchInput(null)}
      >
        <MenuItem className={classes.searchInputWrapper}>
          <Input
            disableUnderline
            onChange={(event) => setValue(event.target.value)}
            className={classes.searchInput}
            placeholder={t(langTokens.main.searchPlaceholder)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                searchHandler();
              }
            }}
          />
          <SearchIcon
            onClick={searchHandler}
            className={classes.searchInputIcon}
          />
        </MenuItem>
      </Menu>
    </>
  );
};
