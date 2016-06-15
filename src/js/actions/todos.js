import * as types from '../constants/ActionTypes';
import { v4 as nextTodoId } from 'node-uuid';
import * as api from '../api';

export const addTodo = (text) => {
  return {
    type: types.ADD_TODO,
    id: nextTodoId(),
    text
  };
};

export const toggleTodo = (id) => {
  return {
    type: types.TOGGLE_TODO,
    id
  };
};

const receiveTodos = (filter, response) => ({
  type: 'RECEIVE_TODOS',
  filter,
  response
});

export const fetchTodos = (filter) =>
  api.fetchTodos(filter).then(response =>
    receiveTodos(filter, response)
  );
