import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';

const createList = (filter) => {
  const ids = (state = [], action) => {
    switch (action.type) {
      case types.FETCH_TODOS_SUCCESS:
        return action.filter === filter ?
          action.response.map(todo => todo.id) :
          state;
      case types.ADD_TODO_SUCCESS:
        return filter !== 'completed' ?
          [...state, action.response.id] :
          state;
      default:
        return state;
    }
  };

  const isFetching = (state = false, action) => {
    if (action.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case types.FETCH_TODOS_REQUEST:
        return true;
      case types.FETCH_TODOS_SUCCESS:
      case types.FETCH_TODOS_FAILURE:
        return false;
      default:
        return state;
    }
  };

  const errorMessage = (state = null, action) => {
    if (action.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case types.FETCH_TODOS_FAILURE:
        return action.message;
      case types.FETCH_TODOS_REQUEST:
      case types.FETCH_TODOS_SUCCESS:
        return null;
      default:
        return state;
    }
  };

  return combineReducers({
    ids,
    isFetching,
    errorMessage
  });
};

export default createList;

export const getIds = (state) => state.ids;
export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;
