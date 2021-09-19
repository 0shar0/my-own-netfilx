import { createAsyncThunk } from '@reduxjs/toolkit';
import { getShows } from '../../Api/api';

export const fetchShows = createAsyncThunk(
  'fetchShows',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getShows();
      return response.data;
    } catch (err) {
      rejectWithValue(err);
    }
  },
);
