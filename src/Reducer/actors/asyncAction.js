import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchActors = createAsyncThunk(
  'fetchActors',
  async (id, { rejectedWithValue }) => {
    try {
    } catch (e) {
      rejectedWithValue(e);
    }
  },
);
