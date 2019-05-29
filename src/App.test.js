import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/index'
import Navbar from './components/Navbar'


it('renders without crashing', () => {
  const store = createStore(reducer, applyMiddleware(thunk))
  const div = document.createElement('div');

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
});

it('expects true to equal true', () => {
  expect(true).toBe(true)
})
