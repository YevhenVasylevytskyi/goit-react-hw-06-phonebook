import { ADD, DELETE, CHANGE, APPLY } from './counter-types';

export const addContacts = value => ({
  type: ADD,
  payload: value,
});

export const deleteContacts = value => ({
  type: DELETE,
  payload: value,
});

export const changeContacts = value => ({
  type: CHANGE,
  payload: value,
});

export const applyContacts = value => ({
  type: APPLY,
  payload: value,
});
