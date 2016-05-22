'use strict';

import React from 'react';

export default class FilterLink extends React.Component {
  static propTypes = {
    store: React.PropTypes.object.isRequired,
    filter: React.PropTypes.string.isRequired
  };

  render() {
    const { filter, store, children } = this.props;
    const current = store.getState().visibilityFilter || 'SHOW_ALL';

    if (filter === current) {
      return <span>{children}</span>;
    }

    return (
      <a href="#" onClick={e => {
        e.preventDefault();
        store.dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter: filter
        });
      }}
      >
        {children}
      </a>
    );
  }
}
