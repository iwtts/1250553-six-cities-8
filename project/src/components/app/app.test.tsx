import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';

import App from './app';

import { AppRoute, AuthStatus, SortType } from '../../const';
import { getMockUserAuthData } from '../../mocks/user';
import { getMockCityName } from '../../mocks/utils';
import { getMockOffers } from '../../mocks/offers';
import { getMockReviews } from '../../mocks/reviews';

const mockStore = configureMockStore();

const mockUserData = getMockUserAuthData();
const mockCity = getMockCityName();
const mockOffers = getMockOffers();
const mockCityOffers = getMockOffers();
const mockReviews = getMockReviews();
const mockNearbyOffers = getMockOffers();
const mockFavoriteOffers = getMockOffers();

const store = mockStore({
  USER: {
    authStatus: AuthStatus.Auth,
    authData: mockUserData,
  },
  OFFERS: {
    isDataLoaded: true,
    currentCity: mockCity,
    offers: mockOffers,
    cityOffers: mockCityOffers,
    reviews: mockReviews,
    nearbyOffers: mockNearbyOffers,
    favoriteOffers: mockFavoriteOffers,
    currentSortType: SortType.TopRatedFirst,
  },
});

const noAuthStore = mockStore({
  USER: {
    authStatus: AuthStatus.NoAuth,
    authData : null,
  },
  OFFERS: {
    isDataLoaded: true,
    currentCity: mockCity,
    offers: mockOffers,
    cityOffers: mockCityOffers,
    reviews: mockReviews,
    nearbyOffers: mockNearbyOffers,
    favoriteOffers: mockFavoriteOffers,
    currentSortType: SortType.Popular,
  },
});

const history = createMemoryHistory();
const fakeApp = (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

describe('Application Routing', () => {
  it('should render Main when user navigate to "/"', () => {
    store.dispatch = jest.fn();
    history.push(AppRoute.Main);
    render(fakeApp);

    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent(/Cities/i);
  });

  it('should render Login when user navigate to "/login"', () => {
    history.push('/login');
    render(
      <Provider store={noAuthStore}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>);

    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent(/Sign in/i);
  });

  it('should render Favorites when user navigate to "/favorites"', () => {
    history.push(AppRoute.Favorites);
    render(fakeApp);

    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent(/favorites/i);
  });

  it('should render Property when user navigate to "/offer/id"', () => {
    history.push(`${AppRoute.Room}/${mockOffers[0].id}`);
    render(fakeApp);

    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent(`${mockOffers[0].title}`);
  });

  it('should render NotFound when user navigate to non-existent route', () => {
    history.push('/non-existent-route');
    render(fakeApp);

    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });
});
