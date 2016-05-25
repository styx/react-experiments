'use strict';

import React from 'react';
import Link from './Link';

export default class FilterLink extends React.Component {
  static propTypes = {
    store: React.PropTypes.object.isRequired,
    filter: React.PropTypes.string.isRequired
  };

  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() =>
      this.forceUpdate()
    );
  }

  componentWillUnMount() {
    this.unsubscribe();
  }

  onClick() {
    this.props.store.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter: this.props.filter
    })
  }

  render() {
    const { filter, store, children } = this.props;
    const state = store.getState();

    return (
      <Link
        active={filter === state.visibilityFilter}
        onClick={this.onClick.bind(this)}
      >
        {children}
      </Link>
    );
  }
}
