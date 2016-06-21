import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
  }

  onClick(value) {
    this.props.dispatch(addTodo(value));
  }

  render() {
    let input;

    return (
      <div>
        <input
          ref={node => { input = node; }}
        />
        <button
          onClick={() => {
            this.onClick(input.value);
            input.value = '';
          }}
        >
          Add Todo
        </button>
      </div>
    );
  }
}

export default connect()(AddTodo);
