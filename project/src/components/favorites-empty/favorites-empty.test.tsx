import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import FavoritesEmpty from './favorites-empty';

const history = createMemoryHistory();

describe('Component: FavoritesEmpty', () => {
  it('should render correctly', () => {
    render(
      <Router history={history}>
        <FavoritesEmpty />
      </Router>);

    expect(screen.getByRole('heading')).toHaveTextContent(/favorites/i);
  });
});
