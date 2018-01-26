import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker.js'
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { meetReducer } from './state.js';


const reducers = combineReducers({
  tasksReducers: meetReducer
});

const store = createStore(reducers);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
