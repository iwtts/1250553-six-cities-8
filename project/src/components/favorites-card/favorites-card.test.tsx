import * as Redux from 'react-redux';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';

import FavoritesCard from './favorites-card';

import { AuthStatus } from '../../const';
import { getMockOffer } from '../../mocks/offers';
import { getMockUserAuthData } from '../../mocks/user';

const mockStore = configureMockStore();
const history = createMemoryHistory();

const mockOffer = getMockOffer();
const mockAuthData = getMockUserAuthData();

const store = mockStore({
  USER: {
    authStatus: AuthStatus.Auth,
    authData: mockAuthData,
  },
  OFFERS: {
    offer: mockOffer,
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

  it('should dispatch action on bookmark click', () => {
    const dispatch = jest.fn();
    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);
    render(
      <Redux.Provider store={store}>
        <Router history={history}>
          <FavoritesCard
            offer={mockOffer}
          />
        </Router>
      </Redux.Provider>);

    const firstLink = screen.getByTestId('bookmark');

    userEvent.click(firstLink);

    expect(dispatch).toBeCalledTimes(1);
  });
});
