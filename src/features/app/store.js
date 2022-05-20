import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducer';

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()));
