import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import { createLogger } from 'redux-logger';
import reduxThunk from 'redux-thunk';

export function store(initialState?: any) {
  const logger = createLogger();

  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(reduxThunk, logger),
  );
  return store;
}

export default store;
