'use strict';

import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions/todos';
import { getVisibleTodos } from '../reducers';
import TodoList from './TodoList';

const mapStateToProps = (state, { params }) => ({
  todos: getVisibleTodos(state, params.filter || 'all')
});

export default withRouter(connect(
  mapStateToProps,
  { onTodoClick: toggleTodo }
)(TodoList));
