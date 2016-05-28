'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todos';

class AddTodo extends React.Component {
  onClick(value) {
    this.props.dispatch(addTodo(value));
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
