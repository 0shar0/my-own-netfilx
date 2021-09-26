import { createAsyncThunk } from '@reduxjs/toolkit';
import { getShows } from '../../Api/api';

export const fetchShows = createAsyncThunk(
  'fetchShows',
  async (params, { rejectWithValue }) => {
    try {
      const response = await getShows(params);
      return response.data;
    } catch (err) {
      rejectWithValue(err);
    }
  },
);
