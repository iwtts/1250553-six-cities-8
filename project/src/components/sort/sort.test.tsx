import * as Redux from 'react-redux';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';

import Sort from './sort';

import {AuthStatus, SortType} from '../../const';
import { getMockOffers } from '../../mocks/offers';
import { getMockReviews } from '../../mocks/reviews';
import { getMockUserAuthData } from '../../mocks/user';
import { getMockCityName } from '../../mocks/utils';

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

describe('Component: Sort', () => {
  it('should render correctly', () => {
    render(
      <Redux.Provider store={store}>
        <Sort />
      </Redux.Provider>);

    expect(screen.getByText(/Sort by/i)).toBeInTheDocument();
  });
});
