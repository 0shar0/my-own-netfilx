import { combineReducers } from 'redux';
import { scheduleReducer } from './schedule';
import { showsReducer } from './shows';

export const rootReducer = combineReducers({
  schedule: scheduleReducer,
  shows: showsReducer,
});
