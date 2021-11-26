import * as Redux from 'react-redux';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';

import Favorites from './favorites';

import { AuthStatus, SortType } from '../../const';
import { getMockOffers } from '../../mocks/offers';
import { getMockUserAuthData } from '../../mocks/user';
import { getMockCityName } from '../../mocks/utils';
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

describe('Component: Favorites', () => {

  it('should render correctly', () => {
    store.dispatch = jest.fn();

    render(
      <Redux.Provider store={store}>
        <Router history={history}>
          <Favorites />
        </Router>
      </Redux.Provider>);

    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent(/Saved listing/i);
  });
});
