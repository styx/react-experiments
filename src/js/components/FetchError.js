import React from 'react';

const FetchError = ({ message, onRetry }) => (
  <div>
    <p>
      Could not fetch todos. {message}
    </p>
    <button onClick={onRetry}>Retry</button>
  </div>
);

FetchError.propTypes = {
  message: React.PropTypes.string.isRequired,
  onRetry: React.PropTypes.func.isRequired,
};

export default FetchError;
