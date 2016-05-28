'use strict';

import React from 'react';

export default class Provider extends React.Component {
  static childContextTypes = {
    store: React.PropTypes.object
  }

  getChildContext() {
    return {
      store: this.props.store
    }
  }

  render() {
    return this.props.children;
  }
}
