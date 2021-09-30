import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRequest } from '../../Api/userApi';

export const fetchRequests = createAsyncThunk(
  'fetchRequests',
  async (id, { rejectedWithValue }) => {
    try {
      const response = await getRequest(id);
      return { requests: response, requested: true };
    } catch (e) {
      rejectedWithValue(e);
    }
  },
);
