'use strict';

import React from 'react';
import FilterLink from './FilterLink';

export default class Footer extends React.Component {
  render() {
    return (
      <p>
        Show:
        {' '}
        <FilterLink filter='SHOW_ALL' {...this.props}>
          All
        </FilterLink>
        {', '}
        <FilterLink filter='SHOW_ACTIVE' {...this.props}>
          Active
        </FilterLink>
        {', '}
        <FilterLink filter='SHOW_COMPLETED' {...this.props}>
          Completed
        </FilterLink>
      </p>
    );
  }
}
