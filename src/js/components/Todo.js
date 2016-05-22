'use strict';

import React from 'react';

export default class Todo extends React.Component {
  static propTypes = {
    completed: React.PropTypes.bool,
    text: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func
  };

  static defaultProps = {
    completed: false,
    onClick: () => {}
  }

  render() {
    const { completed, text, onClick } = this.props;

    return (
      <li onClick={onClick}
      style={{
        textDecoration:
          completed ?
            'line-through' :
            'none'
      }}
      >
        {text}
      </li>
    );
  }
}
