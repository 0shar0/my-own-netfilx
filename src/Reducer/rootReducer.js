import { combineReducers } from 'redux';
import { scheduleReducer } from './schedule';
import { showsReducer } from './shows';
import { episodesReducer } from './episodes';
import { peopleReducer } from './people';
import { requestsReducer } from './requests';

export const rootReducer = combineReducers({
  schedule: scheduleReducer,
  shows: showsReducer,
  episodes: episodesReducer,
  people: peopleReducer,
  requests: requestsReducer,
});
