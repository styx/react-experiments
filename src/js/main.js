'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { loadState, saveState } from './utils/localStorage';
import throttle from 'lodash/throttle';
import { todoApp } from './reducers';

import App from './components/App';

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('main')
  );
};

const store = createStore(todoApp, loadState(),
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

store.subscribe(render);
store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos
  });
}, 1000));

render();
