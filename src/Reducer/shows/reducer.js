import { createSlice } from '@reduxjs/toolkit';
import { getAsyncActionsReducer } from '../../Helpers/asyncAction';
import { fetchShows } from './asyncAction';

const initialState = {
  data: [],
};

const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    clearShowsData: (state) => {
      state.data.splice(0);
    },
  },
  extraReducers: {
    ...getAsyncActionsReducer(fetchShows),
  },
});

const showsReducer = showsSlice.reducer;
const { clearShowsData } = showsSlice.actions;

export { showsReducer, clearShowsData };
