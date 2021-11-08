import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';

import { State } from './state';
import { Offer } from './offer';
import { Review } from './review';

import { ActionType, SortType, AuthStatus } from '../const';

type SetCity = {
  type: ActionType.SetCity;
  payload: string;
}

type SetOffers = {
  type: ActionType.SetOffers;
  payload: Offer[];
}

type SetReviews = {
  type: ActionType.SetReviews;
  payload: Review[];
}

type SetNearbyOffers = {
  type: ActionType.SetNearbyOffers;
  payload: Offer[];
}

type ChangeSortType = {
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

type ChangeUser = {
  type: ActionType.ChangeUser;
  payload: {
    login: string,
  },
}

type RedirectToRoute = {
  type: ActionType.RedirectToRoute;
  payload: {
    url: string,
  }
}

type Actions = SetCity | SetOffers | SetReviews | SetNearbyOffers | ChangeSortType | RequireAuth | RequireLogout | ChangeUser | RedirectToRoute;
type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

export type {
  SetCity,
  SetOffers,
  SetReviews,
  SetNearbyOffers,
  ChangeSortType,
  RequireAuth,
  RequireLogout,
  ChangeUser,
  RedirectToRoute,
  Actions,
  ThunkActionResult,
  ThunkAppDispatch
};
