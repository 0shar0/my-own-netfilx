import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPeople } from '../../Api/api';

export const fetchPeople = createAsyncThunk(
  'fetchPeople',
  async (page, { rejectedWithValue }) => {
    try {
      const response = await getPeople(page);
      return response.data;
    } catch (e) {
      rejectedWithValue(e);
    }
  },
);
