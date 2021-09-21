import { createAsyncThunk } from '@reduxjs/toolkit';
import { getShowsEpisodes } from '../../Api/api';

export const fetchEpisodes = createAsyncThunk(
  'fetchEpisode',
  async (id, { rejectWithValue }) => {
    try {
      const response = await getShowsEpisodes(id);
      return response.data;
    } catch (err) {
      rejectWithValue(err);
    }
  },
);
