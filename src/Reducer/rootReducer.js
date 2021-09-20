import { combineReducers } from 'redux';
import { scheduleReducer } from './schedule';
import { showsReducer } from './shows';
import { episodesReducer } from './episodes';

export const rootReducer = combineReducers({
  schedule: scheduleReducer,
  shows: showsReducer,
  episodes: episodesReducer,
});
