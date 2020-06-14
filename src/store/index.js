import { createStore } from 'redux';
import { defaultState } from '../server/DefaultState';

export const store = createStore(
  // eslint-disable-next-line no-unused-vars
  (state = defaultState, action) => {
    return state;
  }
)