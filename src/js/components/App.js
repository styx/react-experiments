'use strict';

import React from 'react';
import FilterLink from './FilterLink';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

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

  render() {
    let store = this.props.store;
    let todos = this.getVisibleTodos(
      store.getState().todos,
      store.getState().visibilityFilter
    );

    return (
      <div>
        <h1>Hello Redux</h1>

        <AddTodo onClick={this.onAddTodo.bind(this)} />

        <TodoList todos={todos} onTodoClick={this.onTodoClick.bind(this)}/>

        <p>
          Show:
          {' '}
          <FilterLink store={store} filter='SHOW_ALL'>
            All
          </FilterLink>
          {', '}
          <FilterLink store={store} filter='SHOW_ACTIVE'>
            Active
          </FilterLink>
          {', '}
          <FilterLink store={store} filter='SHOW_COMPLETED'>
            Completed
          </FilterLink>
        </p>
      </div>
    );
  }
}
