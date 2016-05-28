'use strict';

import React from 'react';
import Link from './Link';

export default class FilterLink extends React.Component {
  static propTypes = {
    filter: React.PropTypes.string.isRequired
  };

  static contextTypes = {
    store: React.PropTypes.object.isRequired
  }

  componentDidMount() {
    this.unsubscribe = this.context.store.subscribe(() =>
      this.forceUpdate()
    );
  }

  componentWillUnMount() {
    this.unsubscribe();
  }

  onClick() {
    this.context.store.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter: this.props.filter
    })
  }

  render() {
    const { visibilityFilter } = this.context.store.getState();
    const { filter, children } = this.props;

    return (
      <Link
        active={filter === visibilityFilter}
        onClick={this.onClick.bind(this)}
      >
        {children}
      </Link>
    );
  }
}
