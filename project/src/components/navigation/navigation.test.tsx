import * as Redux from 'react-redux';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';

import Navigation from './navigation';

import { getMockCityName } from '../../mocks/utils';

const mockStore = configureMockStore();
const history = createMemoryHistory();

const mockCity = getMockCityName();

const store = mockStore({
  OFFERS: {
    currentCity: mockCity,
  },
});

describe('Component: Navigation', () => {
  it('should render correctly', () => {
    render(
      <Redux.Provider store={store}>
        <Router history={history}>
          <Navigation />
        </Router>
      </Redux.Provider>);

    expect(screen.getByRole('list')).toHaveClass('locations__list');
  });
});
