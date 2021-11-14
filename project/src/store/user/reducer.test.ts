import { ActionType, AuthStatus } from '../../const';
import { userReducer } from './reducer';

describe('Reducer: userReducer', () => {

  it('without additional parameters should return initial state', () => {
    expect(userReducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({authStatus: AuthStatus.Unknown, currentUserEmail: ''});
  });

  it('should change currentUserEmail', () => {
    const prevEmail = 'prevuser@mail.com';
    const newEmail = 'newuser@mail.com';
    const state = {authStatus: AuthStatus.Auth, currentUserEmail: prevEmail};

    const requireAuth = {
      type: ActionType.ChangeUser,
      payload: {
        currentUserEmail: newEmail,
      },
    };

    expect(userReducer(state, requireAuth))
      .toEqual({authStatus: AuthStatus.Auth, currentUserEmail: newEmail});
  });

  it('should update authStatus to "AUTH"', () => {
    const state = {authStatus: AuthStatus.NoAuth, currentUserEmail: ''};
    const requireAuth = {
      type: ActionType.RequireAuth,
      payload: {
        authStatus: AuthStatus.Auth,
      },
    };

    expect(userReducer(state, requireAuth))
      .toEqual({authStatus: AuthStatus.Auth, currentUserEmail: ''});
  });

  it('should update authStatus to "NO_AUTH"', () => {
    const state = {authStatus: AuthStatus.Auth, currentUserEmail: ''};
    const requireLogout = {
      type: ActionType.RequireLogout,
    };

    expect(userReducer(state, requireLogout))
      .toEqual({authStatus: AuthStatus.NoAuth, currentUserEmail: ''});
  });

});
