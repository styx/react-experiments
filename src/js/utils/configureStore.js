import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import todoApp from '../reducers';

const thunk = (store) => (next) => (action) =>
  typeof action === 'function' ?
    action(store.dispatch) :
    next(action);

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
