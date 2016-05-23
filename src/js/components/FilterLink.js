'use strict';

import React from 'react';

export default class FilterLink extends React.Component {
  static propTypes = {
    onFilterClick: React.PropTypes.func,
    currentFilter: React.PropTypes.string,
    filter: React.PropTypes.string.isRequired
  };

  static defaultProps = {
    currentFilter: 'SHOW_ALL',
    onFilterClick: () => {}
  }

  render() {
    const { filter, onFilterClick, currentFilter, children } = this.props;

    if (filter === currentFilter) {
      return <span>{children}</span>;
    }

    return (
      <a href="#" onClick={e => {
        e.preventDefault();
        onFilterClick(filter);
      }} >
        {children}
      </a>
    );
  }
}
