import { createAsyncThunk } from '@reduxjs/toolkit';
import { getSchedule } from '../../Api/api';

export const fetchSchedule = createAsyncThunk(
  'fetchSchedule',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getSchedule();
      return response.data;
    } catch (err) {
      rejectWithValue(err);
    }
  },
);
