import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import todoApp from '../reducers';

const configureStore = () => {
  const middlewares = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(todoApp, compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : undefined
  ));
};

export default configureStore;
