import * as types from '../constants/ActionTypes';
import { v4 as nextTodoId } from 'node-uuid';

export const addTodo = (text) => {
  return {
    type: types.ADD_TODO,
    id: nextTodoId(),
    text
  };
}

export const setVisibilityFilter = (filter) => {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter
  };
}

export const toggleTodo = (id) => {
  return {
    type: types.TOGGLE_TODO,
    id
  };
}
