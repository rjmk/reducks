import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import editString from './reducers';
import App from './containers/App.js';


let store = createStore(editString);

// Mixture of React/React-DOM and react-redux (only the Provider component)

ReactDOM.render(
  <Provider store={ store }>
      <App />
  </Provider>,
  document.getElementById('container'));