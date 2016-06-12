'use strict';

import React from 'react';
import VisibleTodoList from './VisibleTodoList';
import AddTodo from './AddTodo';
import Footer from './Footer';

export default class App extends React.Component {
  static contextTypes = {
    store: React.PropTypes.object.isRequired
  }

  render() {
    const { store } = this.context;

    return (
      <div>
        <h1>Hello Redux</h1>

        <AddTodo />

        <VisibleTodoList filter={this.props.params.filter || 'all'}/>

        <Footer />
      </div>
    );
  }
}
