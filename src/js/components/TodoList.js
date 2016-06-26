import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
  static propTypes = {
    todos: React.PropTypes.array,
    onTodoClick: React.PropTypes.func,
    onDestroyClick: React.PropTypes.func,
  };

  static defaultProps = {
    todos: [],
    onTodoClick: () => {},
    onDestroyClick: () => {},
  }

  render() {
    const { todos, onTodoClick, onDestroyClick } = this.props;

    return (
      <ul>
        {todos.map(todo =>
          <Todo
            key={todo.id} {...todo}
            onToggle={() => onTodoClick(todo.id)}
            onDestroy={() => onDestroyClick(todo.id)}
          />
        )}
      </ul>
    );
  }
}
