'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class FilterLink extends React.Component {
  render() {
    const { filter, children } = this.props;

    return (
      <Link
        to={filter==='all' ? '' : filter}
        activeStyle={{
          textDecoration: 'none',
          color: 'black'
        }}
      >
        {children}
      </Link>
    );
  }
}
