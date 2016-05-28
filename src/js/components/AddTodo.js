'use strict';

import React from 'react';
import { connect } from 'react-redux';

let nextTodoId = 0;

class AddTodo extends React.Component {
  onClick(value) {
    this.props.dispatch({
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

export default connect()(AddTodo);
