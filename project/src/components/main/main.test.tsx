import * as Redux from 'react-redux';
import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Router } from 'react-router-dom';

import Main from './main';

import { createMemoryHistory } from 'history';
import { AuthStatus } from '../../const';
import { SortType } from '../../const';
import { getMockOffers } from '../../mocks/offers';
import { getMockUserAuthData } from '../../mocks/user';
import { getMockCityName } from '../../mocks/utils';
import { getMockReviews } from '../../mocks/reviews';

const mockStore = configureMockStore();
const history = createMemoryHistory();

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

const noOffersStore = mockStore({
  USER: {
    authStatus: AuthStatus.NoAuth,
    authData : null,
  },
  OFFERS: {
    isDataLoaded: true,
    currentCity: mockCity,
    offers: [],
    cityOffers: mockCityOffers,
    reviews: mockReviews,
    nearbyOffers: mockNearbyOffers,
    favoriteOffers: mockFavoriteOffers,
    currentSortType: SortType.Popular,
  },
});

describe('Component: Main', () => {
  it('should render correctly', () => {
    store.dispatch = jest.fn();

    render(
      <Redux.Provider store={store}>
        <Router history={history}>
          <Main />
        </Router>
      </Redux.Provider>);

    expect(screen.getByText(/places to stay in/i)).toBeInTheDocument();
  });

  it('should render correctly if offers length is 0', () => {
    noOffersStore.dispatch = jest.fn();

    render(
      <Redux.Provider store={noOffersStore}>
        <Router history={history}>
          <Main />
        </Router>
      </Redux.Provider>);

    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
  });
});
