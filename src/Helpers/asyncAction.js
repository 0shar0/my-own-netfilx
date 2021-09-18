export const getAsyncActionsReducer = (asyncAction, key = 'data') => ({
  [asyncAction.pending.type]: (state) => {
    state.loading = 'pending';
  },
  [asyncAction.fulfilled.type]: (state, action) => {
    state.loading = 'succeeded';
    state[key] = action.payload;
  },
  [asyncAction.rejected.type]: (state, error) => {
    state.loading = 'failed';
    if (error.payload?.message) {
      state.error = error.payload.message;
    }
  },
});
