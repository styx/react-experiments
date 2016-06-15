import * as types from '../constants/ActionTypes';
import { v4 as nextTodoId } from 'node-uuid';
import * as api from '../api';

export const requestTodos = (filter) => ({
  type: types.REQUEST_TODOS,
  filter
});

const receiveTodos = (filter, response) => ({
  type: types.RECEIVE_TODOS,
  filter,
  response
});

export const fetchTodos = (filter) =>
  api.fetchTodos(filter).then(response =>
    receiveTodos(filter, response)
  );
