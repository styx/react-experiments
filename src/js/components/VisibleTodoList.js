'use strict';

import React from 'react';
import TodoList from './TodoList';

export default class VisibleTodoList extends React.Component {
  static propTypes = {
    store: React.PropTypes.object.isRequired,
  }

  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() =>
      this.forceUpdate()
    );
  }

  componentWillUnMount() {
    this.unsubscribe();
  }

  getVisibleTodos(todos, filter) {
    switch (filter) {
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed);
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed);
      case 'SHOW_ALL':
      default:
        return todos;
    }
  }

  onTodoClick(id) {
    this.props.store.dispatch({
      type: 'TOGGLE_TODO',
      id: id
    });
  }

  render() {
    const { store } = this.props;
    let { todos, visibilityFilter } = store.getState();
    let visibleTodos = this.getVisibleTodos(todos, visibilityFilter);

    return (
      <TodoList todos={visibleTodos} onTodoClick={this.onTodoClick.bind(this)}/>
    );
  }
}
