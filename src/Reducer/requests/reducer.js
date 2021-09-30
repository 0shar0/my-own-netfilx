import { createSlice } from '@reduxjs/toolkit';
import { getAsyncActionsReducer } from '../../Helpers/asyncAction';
import { fetchRequests } from './asyncAction';

const initialState = {
  data: {
    requests: [],
    requested: false,
  },
};

const requestsSlice = createSlice({
  name: 'requests',
  initialState,
  reducers: {
    clearRequests: (state) => {
      delete state.data;
    },
  },
  extraReducers: {
    ...getAsyncActionsReducer(fetchRequests),
  },
});

const requestsReducer = requestsSlice.reducer;
const { clearRequests } = requestsSlice.actions;

export { requestsReducer, clearRequests };
