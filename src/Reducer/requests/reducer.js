import { createSlice } from '@reduxjs/toolkit';
import { getAsyncActionsReducer } from '../../Helpers/asyncAction';
import { fetchRequests } from './asyncAction';

const initialState = {
  data: [],
};

const requestsSlice = createSlice({
  name: 'requests',
  initialState,
  reducers: {
    clearRequests: (state) => {
      state.data.slice(0);
    },
  },
  extraReducers: {
    ...getAsyncActionsReducer(fetchRequests),
  },
});

const requestsReducer = requestsSlice.reducer;
const { clearRequests } = requestsSlice.actions;

export { requestsReducer, clearRequests };
