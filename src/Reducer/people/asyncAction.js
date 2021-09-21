import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPeople } from '../../Api/api';

export const fetchPeople = createAsyncThunk(
  'fetchPeople',
  async (_, { rejectedWithValue }) => {
    try {
      const response = await getPeople();
      return response.data;
    } catch (e) {
      rejectedWithValue(e);
    }
  },
);
