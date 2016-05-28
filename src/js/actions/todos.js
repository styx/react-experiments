import * as types from '../constants/ActionTypes';

let nextTodoId = 0;
export const addTodo = (text) => {
  return {
    type: types.ADD_TODO,
    id: nextTodoId++,
    text
  };
}
