import * as types from '../constants/ActionTypes';
import omit from 'lodash/omit';

const byId = (state = {}, action) => {
  if (action.response) {
    switch (action.type) {
      case types.DESTROY_TODO_SUCCESS:
        return omit(state, action.response.result);
      default:
        return {
          ...state,
          ...action.response.entities.todos,
        };
    }
  }

  return state;
};

export default byId;

export const getTodo = (state, id) => state[id];
