import { configureMockStore } from '@jedmao/redux-mock-store';
import { AnyAction } from 'redux';
import { redirect } from './redirect';
import { redirectToRouter } from '../actions';
import { AppRoute } from '../../const';
import { State } from '../../types/state';

const fakeHistory = {
  location: {pathname: ''},
  push(path: string) {
    this.location.pathname = path;
  },
};

jest.mock('../../browser-history', () => fakeHistory);

const middlewares = [redirect];
const mockStore = configureMockStore<State, AnyAction>(middlewares);
const store = mockStore();

describe('Middleware: redirect', () => {
  beforeEach(() => {
    fakeHistory.push('');
  });

  it('should be redirect to /login', () => {
    store.dispatch(redirectToRouter(AppRoute.SignIn));
    expect(fakeHistory.location.pathname).toStrictEqual({url: AppRoute.SignIn});
    expect(store.getActions()).toEqual([
      redirectToRouter(AppRoute.SignIn),
    ]);
  });
});
