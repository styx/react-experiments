import * as types from '../constants/ActionTypes';
import { getIsFetching } from '../reducers';
import * as api from '../api';

export const fetchTodos = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch({
    type: types.FETCH_TODOS_REQUEST,
    filter,
  });

  return api.fetchTodos(filter).then(
    response => {
      dispatch({
        type: types.FETCH_TODOS_SUCCESS,
        filter,
        response,
      });
    },
    error => {
      dispatch({
        type: types.FETCH_TODOS_FAILURE,
        filter,
        message: error.message || 'Something wrong.',
      });
    }
  );
};

export const addTodo = (text) => (dispatch) =>
  api.addTodo(text).then(response => {
    dispatch({
      type: types.ADD_TODO_SUCCESS,
      response,
    });
  });
