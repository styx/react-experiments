'use strict';

import React from 'react';
import VisibleTodoList from './VisibleTodoList';
import AddTodo from './AddTodo';
import Footer from './Footer';

let nextTodoId = 0;

export default class App extends React.Component {

  static propTypes = {
    store: React.PropTypes.object.isRequired
  };

  onAddTodo(value) {
    this.props.store.dispatch({
      type: 'ADD_TODO',
      text: value,
      id: nextTodoId++
    });
  }

  render() {
    const { store } = this.props;

    return (
      <div>
        <h1>Hello Redux</h1>

        <AddTodo onClick={this.onAddTodo.bind(this)} />

        <VisibleTodoList store={store} />

        <Footer store={store} />
      </div>
    );
  }
}
