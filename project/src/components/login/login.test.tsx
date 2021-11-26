import * as Redux from 'react-redux';
import { Router } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';

import Login from './login';

import { createMemoryHistory } from 'history';
import { AuthStatus, SortType } from '../../const';
import { getMockCityName } from '../../mocks/utils';
import { getMockOffers } from '../../mocks/offers';
import { getMockReviews } from '../../mocks/reviews';

const history = createMemoryHistory();
const mockStore = configureMockStore();

const mockCity = getMockCityName();
const mockOffers = getMockOffers();
const mockCityOffers = getMockOffers();
const mockReviews = getMockReviews();
const mockNearbyOffers = getMockOffers();
const mockFavoriteOffers = getMockOffers();

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

describe('Component: Login', () => {
  noAuthStore.dispatch = jest.fn();

  it('should render correctly', () => {
    render(
      <Redux.Provider store={noAuthStore}>
        <Router history={history}>
          <Login />
        </Router>
      </Redux.Provider>);

    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent(/Sign in/i);
  });
});
