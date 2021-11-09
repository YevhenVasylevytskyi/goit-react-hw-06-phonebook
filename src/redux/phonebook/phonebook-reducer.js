import { combineReducers } from 'redux';
import { ADD, REMOVE, CHANGE, APPLY } from './counter-types';

const addReducer = (state = {}, { type, payload }) => {};

const removeReducer = (state = {}, { type, payload }) => {};

const changeReducer = (state = {}, { type, payload }) => {};

const applyReducer = (state = {}, { type, payload }) => {};

export default combineReducers({
  add: addReducer,
  remove: removeReducer,
  change: changeReducer,
  apply: applyReducer,
});
