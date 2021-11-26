import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import PrivateRoute from './private-route';
import { AppRoute, AuthStatus } from '../../const';

const mockStore = configureMockStore();
const history = createMemoryHistory();

const authStore = mockStore({
  USER: {
    authStatus: AuthStatus.Auth,
  },
});

const noAuthStore = mockStore({
  USER: {
    authStatus: AuthStatus.NoAuth,
  },
});

describe('Component: PrivateRoute', () => {
  beforeEach(() => {
    history.push(AppRoute.Favorites);
  });

  it('should render component for private route, when user authorized', () => {
    render(
      <Provider store={authStore}>
        <Router history={history}>
          <Route exact path={AppRoute.SignIn}>
            <h1>Public Route</h1>
          </Route>
          <PrivateRoute exact path={AppRoute.Favorites} render={() => (<h1>Private Route</h1>)} />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Private Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Public Route/i)).toBeNull();
  });

  it('should render component for public route, when user not authorized', () => {
    render(
      <Provider store={noAuthStore}>
        <Router history={history}>
          <Route exact path={AppRoute.SignIn}>
            <h1>Public Route</h1>
          </Route>
          <PrivateRoute exact path={AppRoute.Favorites} render={() => (<h1>Private Route</h1>)} />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Public Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Private Route/i)).toBeNull();
  });
});
