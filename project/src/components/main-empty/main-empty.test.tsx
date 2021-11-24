import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import MainEmpty from './main-empty';

const history = createMemoryHistory();

describe('Component: FavoritesEmpty', () => {
  it('should render correctly', () => {
    render(
      <Router history={history}>
        <MainEmpty />
      </Router>);

    expect(screen.getByText(/no places to stay available/i)).toBeInTheDocument();
  });
});
