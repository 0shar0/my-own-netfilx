import React, {useEffect} from 'react';
import {useStyles} from './MainPage.styles';
import {useAction} from '../../Hooks/useAction';
import {fetchSchedule, selectSchedule} from '../../Reducer/schedule';
import {useSelector} from 'react-redux';

export const MainPage = () => {
  const classes = useStyles();

  const schedule = useSelector(selectSchedule);
  const [boundFetchSchedule] = useAction([fetchSchedule]);

  useEffect(() => {
    boundFetchSchedule();
  }, []);

  console.log(schedule);

  return <div className={classes.mainPage}>Main Page</div>;
};
