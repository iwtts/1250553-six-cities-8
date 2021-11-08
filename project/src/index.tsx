import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer } from './store/reducer';
import { requireAuth } from './store/actions';
import { loadDataOffers, checkAuth} from './store/api-actions';
import { createApi } from './services/api';
import { ThunkAppDispatch } from './types/action';
import { AuthStatus } from './const';

const api = createApi(
  () => store.dispatch(requireAuth(AuthStatus.NoAuth)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

(store.dispatch as ThunkAppDispatch)(checkAuth());
(store.dispatch as ThunkAppDispatch)(loadDataOffers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
