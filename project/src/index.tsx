import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import { offers } from './mocks/offers';

const Setting ={
  CARDS_AMOUNT: 5,
} as const;

ReactDOM.render(
  <React.StrictMode>
    <App
      cardsAmount = {Setting.CARDS_AMOUNT}
      offers = {offers}
    />
  </React.StrictMode>,
  document.getElementById('root'));
