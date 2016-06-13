'use strict';

import React from 'react';
import { withRouter } from 'react-router';
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

const mapStateToProps = (state, { params }) => ({
  todos: getVisibleTodos(state.todos, params.filter || 'all')
});

export default withRouter(connect(
  mapStateToProps,
  { onTodoClick: toggleTodo }
)(TodoList));
