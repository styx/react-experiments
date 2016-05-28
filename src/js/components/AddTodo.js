'use strict';

import React from 'react';

let nextTodoId = 0;

export default class AddTodo extends React.Component {
  static contextTypes = {
    store: React.PropTypes.object.isRequired
  }

  onClick(value) {
    this.context.store.dispatch({
      type: 'ADD_TODO',
      text: value,
      id: nextTodoId++
    });
  }

  render() {
    let input;
    const { onClick } = this.props;

    return (
      <div>
        <input ref={node => {
          input = node;
        }} />
        <button onClick={() => {
          this.onClick(input.value);
          input.value = '';
        }}>
          Add Todo
        </button>
      </div>
    );
  }
}
