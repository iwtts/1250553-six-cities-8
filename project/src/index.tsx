import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './store/root-reducer';
import { redirect } from './store/middlewares/redirect';
import { requireAuth } from './store/actions';
import { loadDataOffers, checkAuth } from './store/api-actions';
import { createApi } from './services/api';
import { AuthStatus } from './const';

const api = createApi(
  () => store.dispatch(requireAuth(AuthStatus.NoAuth)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

(store.dispatch)(checkAuth());
(store.dispatch)(loadDataOffers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
