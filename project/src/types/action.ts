import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';

import { State } from './state';
import { Offer } from './offer';
import { ActionType, SortType, AuthStatus } from '../const';

type SetCityAction = {
  type: ActionType.SetCity;
  payload: string;
}

type SetOffersAction = {
  type: ActionType.SetOffers;
  payload: Offer[];
}

type ChangeSortTypeAction = {
  type: ActionType.ChangeSortType;
  payload: {
    currentSortType: SortType,
  },
}

type RequireAuth = {
  type: ActionType.RequireAuth;
  payload: {
    authStatus: AuthStatus,
  },
}

type RequireLogout = {
  type: ActionType.RequireLogout;
}

type Actions = SetCityAction | SetOffersAction | ChangeSortTypeAction | RequireAuth | RequireLogout;
type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

export type {
  SetCityAction,
  SetOffersAction,
  ChangeSortTypeAction,
  RequireAuth,
  RequireLogout,
  Actions,
  ThunkActionResult,
  ThunkAppDispatch
};
