import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './store/reducer';

const Setting ={
  CARDS_AMOUNT: 5,
} as const;

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        cardsAmount = {Setting.CARDS_AMOUNT}
        offers = {offers}
        reviews = {reviews}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
