import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getVisibleTodos, getIsFetching, getErrorMessage } from '../reducers';
import TodoList from './TodoList';
import FetchError from './FetchError';

class VisibleTodoList extends React.Component {
  static propTypes = {
    filter: React.PropTypes.string,
    fetchTodos: React.PropTypes.func.isRequired,
    toggleTodo: React.PropTypes.func.isRequired,
    destroyTodo: React.PropTypes.func.isRequired,
    errorMessage: React.PropTypes.string,
    todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    isFetching: React.PropTypes.bool.isRequired,
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const { filter, fetchTodos } = this.props;
    fetchTodos(filter);
  }

  render() {
    const { toggleTodo, destroyTodo, errorMessage, todos, isFetching } = this.props;

    if (isFetching && !todos.length) {
      return (
        <p>loading...</p>
      );
    }

    if (errorMessage && !todos.length) {
      return (
        <FetchError
          message={errorMessage}
          onRetry={() => this.fetchData()}
        />
      );
    }

    return (
      <TodoList
        todos={todos}
        onTodoClick={toggleTodo}
        onDestroyClick={destroyTodo}
      />
    );
  }
}

const mapStateToProps = (state, { params }) => {
  const filter = params.filter || 'all';
  return {
    todos: getVisibleTodos(state, filter),
    isFetching: getIsFetching(state, filter),
    errorMessage: getErrorMessage(state, filter),
    filter,
  };
};

export default withRouter(connect(
  mapStateToProps,
  actions
)(VisibleTodoList));
