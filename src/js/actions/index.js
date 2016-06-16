import * as types from '../constants/ActionTypes';
import { v4 as nextTodoId } from 'node-uuid';
import { getIsFetching } from '../reducers';
import * as api from '../api';

const requestTodos = (filter) => ({
  type: types.REQUEST_TODOS,
  filter
});

const receiveTodos = (filter, response) => ({
  type: types.RECEIVE_TODOS,
  filter,
  response
});

export const fetchTodos = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }
  dispatch(requestTodos(filter));

  return api.fetchTodos(filter).then(response =>
    dispatch(receiveTodos(filter, response))
  );
};
