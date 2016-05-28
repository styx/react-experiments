'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/todos';
import Link from './Link';

const mapStateToProps = (state, props) => {
  return {
    active:
      props.filter ===
      state.visibilityFilter
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(props.filter))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Link);
