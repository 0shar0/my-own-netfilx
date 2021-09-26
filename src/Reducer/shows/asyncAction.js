import { createAsyncThunk } from '@reduxjs/toolkit';
import { getShows } from '../../Api/api';

export const fetchShows = createAsyncThunk(
  'fetchShows',
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const response = await getShows({page,limit});
      return response.data;
    } catch (err) {
      rejectWithValue(err);
    }
  },
);
