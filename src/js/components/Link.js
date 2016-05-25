
'use strict';

import React from 'react';

export default class Link extends React.Component {
  static propTypes = {
    active: React.PropTypes.bool,
    onClick: React.PropTypes.func
  };

  static defaultProps = {
    active: false,
    onClick: () => {}
  }

  render() {
    const { active, onClick, children } = this.props;

    if (active) {
      return <span>{children}</span>;
    }

    return (
      <a href="#" onClick={e => {
        e.preventDefault();
        onClick();
      }} >
        {children}
      </a>
    );
  }
}
