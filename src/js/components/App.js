'use strict';

import React from 'react';
import FilterLink from './FilterLink';

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

  render() {
    let store = this.props.store;
    let todos = this.getVisibleTodos(
      store.getState().todos,
      store.getState().visibilityFilter
    );

    return (
      <div>
        <h1>Hello Redux</h1>

        <input ref={node => {
          this.input = node;
        }} />
        <button onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            text: this.input.value,
            id: nextTodoId++
          });
          this.input.value = '';
        }}>
          Add Todo
        </button>

        <ul>
          {todos.map(todo =>
            <li key={todo.id} onClick={() => {
              store.dispatch({
                type: 'TOGGLE_TODO',
                id: todo.id
              });
            }}
            style={{
              textDecoration:
                todo.completed ?
                  'line-through' :
                  'none'
            }}
            >
              {todo.text}
            </li>
          )}
        </ul>
        <p>
          Show:
          {' '}
          <FilterLink store={store} filter='SHOW_ALL'>
            All
          </FilterLink>
          {' '}
          <FilterLink store={store} filter='SHOW_ACTIVE'>
            Active
          </FilterLink>
          {' '}
          <FilterLink store={store} filter='SHOW_COMPLETED'>
            Completed
          </FilterLink>
        </p>
      </div>
    );
  }
}
