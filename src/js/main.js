'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';

import App from './components/app';

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

const render = () => {
  ReactDOM.render(
    <App
      store={store}
    />,
    document.getElementById('main')
  );
};

const todoApp = combineReducers({todos, visibilityFilter});
const store = createStore(todoApp, {},
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

export default store;
store.subscribe(render);

render();
