import { createSlice } from '@reduxjs/toolkit';
import { getAsyncActionsReducer } from '../../Helpers/asyncAction';
import { fetchEpisodes } from './asyncActions';

const initialState = {
  data: [],
};
const episodesSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {
    clearEpisode: (state) => {
      state.data.slice(0);
    },
  },
  extraReducers: {
    ...getAsyncActionsReducer(fetchEpisodes),
  },
});

const episodesReducer = episodesSlice.reducer;
const { clearEpisodes } = episodesSlice.actions;

export { episodesReducer, clearEpisodes };
