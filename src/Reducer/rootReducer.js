import { combineReducers } from 'redux';
import {scheduleReducer} from './schedule';

export const rootReducer = combineReducers({
  schedule: scheduleReducer,
});
