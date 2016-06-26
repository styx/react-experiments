import React from 'react';

export default class Todo extends React.Component {
  static propTypes = {
    completed: React.PropTypes.bool,
    text: React.PropTypes.string.isRequired,
    onToggle: React.PropTypes.func,
    onDestroy: React.PropTypes.func,
  };

  static defaultProps = {
    completed: false,
    onClick: () => {},
  }

  render() {
    const { completed, text, onToggle, onDestroy } = this.props;

    return (
      <li
        style={{
          textDecoration:
            completed ?
              'line-through' :
              'none',
        }}
      >
        <span onClick={onToggle}>{text}</span>
        <a onClick={onDestroy}>[X]</a>
      </li>
    );
  }
}
