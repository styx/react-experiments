import React from 'react';
import { render } from 'react-dom';
import configureStore from './utils/configureStore.js';
import Root from './components/Root';

const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('main')
);
