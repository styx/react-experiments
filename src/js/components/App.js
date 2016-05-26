'use strict';

import React from 'react';
import VisibleTodoList from './VisibleTodoList';
import AddTodo from './AddTodo';
import Footer from './Footer';

export default class App extends React.Component {

  static propTypes = {
    store: React.PropTypes.object.isRequired
  };

  render() {
    const { store } = this.props;

    return (
      <div>
        <h1>Hello Redux</h1>

        <AddTodo store={store} />

        <VisibleTodoList store={store} />

        <Footer store={store} />
      </div>
    );
  }
}
