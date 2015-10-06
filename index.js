import { createStore, applyMiddleware } from 'redux';
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import editString from './reducers';
import App from './containers/App.js';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);

const store = createStoreWithMiddleware(editString);

// Mixture of React/React-DOM and react-redux (only the Provider component)

ReactDOM.render(
  <Provider store={ store }>
      <App />
  </Provider>,
  document.getElementById('container'));
