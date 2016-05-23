'use strict';

import React from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Footer from './Footer';

let nextTodoId = 0;

export default class App extends React.Component {

  static propTypes = {
    store: React.PropTypes.object.isRequired
  };

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

  onAddTodo(value) {
    this.props.store.dispatch({
      type: 'ADD_TODO',
      text: value,
      id: nextTodoId++
    });
  }

  onTodoClick(id) {
    this.props.store.dispatch({
      type: 'TOGGLE_TODO',
      id: id
    });
  }

  onFilterClick(filter) {
    this.props.store.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter: filter
    });
  }

  render() {
    let { todos, visibilityFilter } = this.props.store.getState();
    let visibleTodos = this.getVisibleTodos(todos, visibilityFilter);

    return (
      <div>
        <h1>Hello Redux</h1>

        <AddTodo onClick={this.onAddTodo.bind(this)} />

        <TodoList todos={visibleTodos} onTodoClick={this.onTodoClick.bind(this)}/>

        <Footer currentFilter={visibilityFilter}
          onFilterClick={this.onFilterClick.bind(this)} />
      </div>
    );
  }
}
