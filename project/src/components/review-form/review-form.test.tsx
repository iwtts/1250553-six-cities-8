import * as Redux from 'react-redux';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';

import ReviewForm from './review-form';

import { createMemoryHistory } from 'history';
import { AuthStatus } from '../../const';
import { getMockOffers } from '../../mocks/offers';
import { getMockUserAuthData } from '../../mocks/user';
import { getMockCityName } from '../../mocks/utils';
import { getMockReviews } from '../../mocks/reviews';
import { SortType } from '../../const';

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

describe('Component: ReviewForm', () => {
  it('should render correctly', () => {
    store.dispatch = jest.fn();

    render(
      <Redux.Provider store={store}>
        <Router history={history}>
          <ReviewForm offerId={mockOffers[0].id.toString()}/>
        </Router>
      </Redux.Provider>);

    expect(screen.getByText(/Your review/i)).toBeInTheDocument();
  });
});
