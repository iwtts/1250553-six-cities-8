import { AuthStatus } from '../../const';
import { getMockUserAuthData } from '../../mocks/user';
import { requireAuth, requireLogout, setAuthData } from '../actions';
import { initialState, userReducer } from './reducer';

describe('Reducer: userReducer', () => {

  it('without additional parameters should return initial state', () => {
    expect(userReducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(initialState);
  });

  it('should update authStatus to "AUTH"', () => {
    expect(userReducer(initialState, requireAuth(AuthStatus.Auth)))
      .toEqual({
        ...initialState,
        authStatus: AuthStatus.Auth,
      });
  });

  it('should update authStatus to "NO_AUTH"', () => {
    expect(userReducer(initialState, requireLogout()))
      .toEqual({
        ...initialState,
        authStatus: AuthStatus.NoAuth,
      });
  });

  it('should update user auth data', () => {
    const mockAuthData = getMockUserAuthData();

    expect(userReducer(initialState, setAuthData(mockAuthData)))
      .toEqual({
        ...initialState,
        authData: mockAuthData,
      });
  });
});
