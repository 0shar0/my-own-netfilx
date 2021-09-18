import {createSlice} from '@reduxjs/toolkit';
import {getAsyncActionsReducer} from '../../Helpers/asyncAction';
import {fetchSchedule} from './asyncAction';

const initialState = {
  data: [],
};

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    clearSchedule: (state) => {
      state.data.splice(0);
    },
  },
  extraReducers: {
    ...getAsyncActionsReducer(fetchSchedule),
  },
});

const scheduleReducer = scheduleSlice.reducer;
const { clearSchedule } = scheduleSlice.actions;

export { scheduleReducer, clearSchedule };
