import { createReducer } from '@reduxjs/toolkit';
import { requireAuth, requireLogout, setAuthData } from '../actions';
import { UserState } from '../../types/state';
import { AuthStatus } from '../../const';

const initialState: UserState = {
  authStatus: AuthStatus.Unknown,
  authData: null,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuth, (state, action) => {
      state.authStatus = action.payload.authStatus;
    })
    .addCase(requireLogout, (state) => {
      state.authStatus = AuthStatus.NoAuth;
    })
    .addCase(setAuthData, (state, action) => {
      state.authData = action.payload.authData;
    });
});

export { userReducer };
