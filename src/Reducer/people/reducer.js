import { createSlice } from '@reduxjs/toolkit';
import { getAsyncActionsReducer } from '../../Helpers/asyncAction';
import { fetchPeople } from './asyncAction';

const initialState = {
  data: [],
};

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    clearPeopleData: (state) => {
      state.data.splice(0);
    },
  },
  extraReducers: {
    ...getAsyncActionsReducer(fetchPeople),
  },
});

const peopleReducer = peopleSlice.reducer;
const { clearPeopleData } = peopleSlice.actions;

export { peopleReducer, clearPeopleData };
