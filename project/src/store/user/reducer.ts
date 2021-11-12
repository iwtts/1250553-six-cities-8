import { createReducer } from '@reduxjs/toolkit';
import { UserState } from '../../types/state';
import { changeUser, requireAuth, requireLogout } from '../actions';
import { AuthStatus } from '../../const';

const initialState: UserState = {
  authStatus: AuthStatus.Unknown,
  currentUserEmail: '',
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeUser, (state, action) => {
      state.currentUserEmail = action.payload.currentUserEmail;
    })
    .addCase(requireAuth, (state, action) => {
      state.authStatus = action.payload.authStatus;
    })
    .addCase(requireLogout, (state) => {
      state.authStatus = AuthStatus.NoAuth;
    });
});

export { userReducer };
