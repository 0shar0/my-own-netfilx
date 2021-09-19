import { createAsyncThunk } from '@reduxjs/toolkit';
import { getShows } from '../../Api/api';

export const fetchShows = createAsyncThunk(
  'fetchShows',
  async ({ page }, { rejectWithValue }) => {
    try {
      const response = await getShows(page);

      return response.data;
    } catch (err) {
      rejectWithValue(err);
    }
  },
);
