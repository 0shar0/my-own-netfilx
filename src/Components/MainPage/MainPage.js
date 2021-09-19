import React, { useEffect } from 'react';
import { useStyles } from './MainPage.styles';
import { useAction } from '../../Hooks/useAction';
import { fetchSchedule, selectSchedule } from '../../Reducer/schedule';
import { useSelector } from 'react-redux';
import { Schedule } from './Schedule/Schedule';

const MainPage = () => {
  const classes = useStyles();

  const schedule = useSelector(selectSchedule);
  const [boundFetchSchedule] = useAction([fetchSchedule]);

  useEffect(() => {
    boundFetchSchedule();
  }, []);

  return (
    <div className={classes.mainPage}>
      <Schedule schedule={schedule} />
    </div>
  );
};
export default MainPage;
