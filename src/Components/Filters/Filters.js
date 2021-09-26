import React from 'react';
import Select from 'react-select';
import { useStyles } from './Filters.style';
import { useTranslation } from 'react-i18next';
import { langTokens } from '../../Locales/localization';
import { genres } from '../../Constant/Genres';
import { useTheme } from '@material-ui/core';

export const Filters = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme();
  const options = [
    { value: null, label: t(langTokens.main.showStatus) },
    { value: 'Ended', label: t(langTokens.main.ended) },
    { value: 'Running', label: t(langTokens.main.running) },
    { value: 'To Be Determined', label: t(langTokens.main.determined) },
    { value: 'In Development', label: t(langTokens.main.develop) },
  ];

  const customStyles = {
    menu: () => ({
      backgroundColor: theme.palette.secondary.main,
    }),

    singleValue: (provided) => {
      const opacity = 1;
      const transition = 'opacity 300ms';

      return { ...provided, opacity, transition };
    },
    control: (styles) => ({
      ...styles,
      color: theme.palette.common.white,
      cursor: 'pointer',
      backgroundColor: theme.palette.secondary.main,
      ':active': {
        borderColor: theme.palette.primary.main,
      },
    }),
    multiValueRemove: (styles, { data }) => ({
      color: 'red',
    }),
  };

  return (
    <div className={classes.root}>
      <Select
        theme={(t) => ({
          ...t,
          colors: {
            ...theme.colors,
            primary25: theme.palette.opacity.red,
            primary: theme.palette.opacity.black,
          },
        })}
        styles={customStyles}
        placeholder={'Show Status'}
        options={options}
      />
      <Select
        theme={(t) => ({
          ...t,
          opacity: {
            ...t,
            primary25: 0.5,
            primary: 0.5,
          },
          colors: {
            ...theme.colors,
            primary25: theme.palette.opacity.red,
            primary: theme.palette.opacity.black,
          },
        })}
        styles={customStyles}
        isMulti
        placeholder={'Show Genres'}
        options={genres.map((genre) => ({
          value: genre,
          label: genre,
        }))}
      />
    </div>
  );
};
