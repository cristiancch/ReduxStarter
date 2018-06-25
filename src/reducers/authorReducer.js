import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.authors, action) { //state=[] -> set initial state (default parameters)
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors; //return new state
    default:
      return state;
  }
}
