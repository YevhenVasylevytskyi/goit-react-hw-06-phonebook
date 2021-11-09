import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as actions from './counter-types';

const initialState = {};

const { ADD, DELETE, CHANGE, APPLY } = actions;

const itemsReducer = (state = initialState, { type, payload }) => {
  switch (actions.type) {
    case ADD:
      if (state.some(contact => contact.name.includes(payload.name))) {
        alert(`${payload.name} is already in contacts!`);
        return state;
      }

      const addContacts = [...state, payload];
      window.localStorage.setItem('contacts', JSON.stringify(addContacts));
      return addContacts;

    case DELETE:
      const deleteContacts = [
        ...state.filter(contact => contact.id !== payload),
      ];
      window.localStorage.setItem('contacts', JSON.stringify(deleteContacts));
      return deleteContacts;

    default:
      return state;
  }
};

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case CHANGE:
      return state;
    case APPLY:
      return state;
    default:
      return state;
  }
};

const store = createStore(itemsReducer);

export default store;

// import {
//   addReducer,
//   removeReducer,
//   changeReducer,
//   applyReducer,
// } from './phonebook/phonebook-reducer';

// const rootReducer = combineReducers({
//   add: addReducer,
//   remove: removeReducer,
//   change: changeReducer,
//   apply: applyReducer,
// });
