'use strict';

import React from 'react';

import Todo from './Todo';

export default class TodoList extends React.Component {
  static propTypes = {
    todos: React.PropTypes.array,
    onTodoClick: React.PropTypes.func
  };

  static defaultProps = {
    todos: [],
    onTodoClick: () => {}
  }

  render() {
    const { todos, onTodoClick } = this.props;

    return (
      <ul>
        {todos.map(todo =>
          <Todo key={todo.id} {...todo}
            onClick={ () => onTodoClick(todo.id) }/>
        )}
      </ul>
    );
  }
}
