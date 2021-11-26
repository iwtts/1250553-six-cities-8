import * as Redux from 'react-redux';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';

import CardsList from './cards-list';

import { AuthStatus, CardType } from '../../const';
import { getMockOffers } from '../../mocks/offers';
import { getMockUserAuthData } from '../../mocks/user';

const mockStore = configureMockStore();
const history = createMemoryHistory();

const mockOffers = getMockOffers();
const mockAuthData = getMockUserAuthData();

const store = mockStore({
  DATA: {
    offers: mockOffers,
  },
  USER: {
    authStatus: AuthStatus.Auth,
    authData: mockAuthData,
  },
});

describe('Component: CardsList', () => {
  it('should render correctly', () => {
    render(
      <Redux.Provider store={store}>
        <Router history={history}>
          <CardsList
            cardType={CardType.Main}
            offers={mockOffers}
          />
        </Router>
      </Redux.Provider>);

    expect(screen.getByTestId('cards-list')).toBeInTheDocument();
  });
});
