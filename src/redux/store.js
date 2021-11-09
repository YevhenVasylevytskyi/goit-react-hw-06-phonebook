import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  addReducer,
  removeReducer,
  changeReducer,
  applyReducer,
} from './phonebook/phonebook-reducer';

const rootReducer = combineReducers({
  add: addReducer,
  remove: removeReducer,
  change: changeReducer,
  apply: applyReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
