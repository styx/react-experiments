'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions/todos';
import TodoList from './TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'active':
      return todos.filter(t => !t.completed);
    case 'completed':
      return todos.filter(t => t.completed);
    case 'all':
    default:
      return todos;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: getVisibleTodos(
      state.todos,
      ownProps.filter
    )
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
