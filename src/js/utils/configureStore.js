import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import todoApp from '../reducers';

const configureStore = () => {
  const middlewares = [promise];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(todoApp, compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : undefined
  ));
};

export default configureStore;
