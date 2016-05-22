'use strict';

import React from 'react';

let nextTodoId = 0;

export default class App extends React.Component {

  static propTypes = {
    store: React.PropTypes.object.isRequired
  };

  render() {
    let store = this.props.store;
    let todos = store.getState().todos;

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
      </div>
    );
  }
}
