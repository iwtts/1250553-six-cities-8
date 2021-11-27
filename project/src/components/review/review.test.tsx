import * as Redux from 'react-redux';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';

import Review from './review';

import { createMemoryHistory } from 'history';
import { getMockReview } from '../../mocks/reviews';

const mockStore = configureMockStore();
const history = createMemoryHistory();

const mockReview = getMockReview();

describe('Component: Review', () => {
  it('should render correctly', () => {
    render(
      <Redux.Provider store={mockStore({})}>
        <Router history={history}>
          <Review
            review={mockReview}
          />
        </Router>
      </Redux.Provider>);

    expect(screen.getByRole('listitem')).toHaveClass('reviews__item');
  });
});
