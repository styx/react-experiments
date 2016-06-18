import * as types from '../constants/ActionTypes';

const byId = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_TODOS_SUCCESS:
      const nextState = { ...state };
      action.response.forEach(todo =>
        nextState[todo.id] = todo
      );
      return nextState;
    case types.ADD_TODO_SUCCESS:
      return {
        ...state,
        [action.response.id]: action.response,
      };
    default:
      return state;
  }
};

export default byId;

export const getTodo = (state, id) => state[id];
