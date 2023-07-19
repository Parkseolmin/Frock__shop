import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/productReducer';
import authenticateReducer from './reducers/authenticateReducer';

const store = configureStore({
  reducer: {
    auth: authenticateReducer,
    product: productReducer,
  },
});

export default store;
