import * as Redux from 'react-redux';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';

import Header from './header';

import { AuthStatus, SortType } from '../../const';
import { getMockUserAuthData } from '../../mocks/user';
import { getMockCityName } from '../../mocks/utils';
import { getMockOffers } from '../../mocks/offers';
import { getMockReviews } from '../../mocks/reviews';

const history = createMemoryHistory();
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

describe('Component: Header', () => {
  it('should render correctly when authStatus "AUTH"', () => {
    render(
      <Redux.Provider store={store}>
        <Router history={history}>
          <Header />
        </Router>
      </Redux.Provider>);

    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
    expect(screen.queryByText(/Sign in/i)).toBeNull();
  });

  it('should render correctly when authStatus "NO_AUTH"', () => {
    render(
      <Redux.Provider store={noAuthStore}>
        <Router history={history}>
          <Header />
        </Router>
      </Redux.Provider>);

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
    expect(screen.queryByText(/Sign out/i)).toBeNull();
  });
});
