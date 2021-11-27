import * as Redux from 'react-redux';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';

import SortItem from './sort-item';

import { SortType } from '../../const';

const mockStore = configureMockStore();

describe('Component: SortItem', () => {
  it('should render correctly', () => {
    render(
      <Redux.Provider store={mockStore({})}>
        <SortItem
          sortType={SortType.Popular}
          currentSortType={SortType.Popular}
          onClick={() => void 0}
        />
      </Redux.Provider>);

    expect(screen.getByRole('listitem')).toBeInTheDocument();
  });
});
