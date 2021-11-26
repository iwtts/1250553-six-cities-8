import * as Redux from 'react-redux';
import ReactRouter from 'react-router';
import {Router} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';

import Property from './property';

import { createMemoryHistory } from 'history';
import { AuthStatus } from '../../const';
import { getMockOffers } from '../../mocks/offers';
import { getMockReviews } from '../../mocks/reviews';
import { getMockUserAuthData } from '../../mocks/user';
import { getMockCityName } from '../../mocks/utils';
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

describe('Component: Property', () => {
  it('should render correctly', () => {
    jest.spyOn(ReactRouter, 'useParams').mockReturnValue({id: mockOffers[0].id.toString()});
    store.dispatch = jest.fn();

    render(
      <Redux.Provider store={store}>
        <Router history={history}>
          <Property />
        </Router>
      </Redux.Provider>);

    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent(`${mockOffers[0].title}`);
  });
});
