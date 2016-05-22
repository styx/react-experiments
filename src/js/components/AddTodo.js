'use strict';

import React from 'react';

export default class AddTodo extends React.Component {
  static propTypes = {
    onClick: React.PropTypes.func
  };

  static defaultProps = {
    onClick: () => {}
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
          onClick(input.value);
          input.value = '';
        }}>
          Add Todo
        </button>
      </div>
    );
  }
}
