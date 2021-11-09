import { ADD, REMOVE, CHANGE, APPLY } from './counter-types';

export const addContacts = value => ({
  type: ADD,
  payload: value,
});

export const removeContacts = value => ({
  type: REMOVE,
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
