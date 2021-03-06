import * as Redux from 'react-redux';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';

import FavoritesCard from './favorites-card';

import { AuthStatus } from '../../const';
import { getMockOffer } from '../../mocks/offers';
import { getMockUserAuthData } from '../../mocks/user';

const mockStore = configureMockStore();
const history = createMemoryHistory();

const mockOffer = getMockOffer();
const mockAuthData = getMockUserAuthData();

const store = mockStore({
  DATA: {
    offer: mockOffer,
  },
  USER: {
    authStatus: AuthStatus.Auth,
    authData: mockAuthData,
  },
});

describe('Component: FavoritesCard', () => {
  it('should render correctly', () => {
    render(
      <Redux.Provider store={store}>
        <Router history={history}>
          <FavoritesCard
            offer={mockOffer}
          />
        </Router>
      </Redux.Provider>);

    expect(screen.getByRole('heading', {level: 2})).toHaveTextContent(`${mockOffer.title}`);
  });
});
