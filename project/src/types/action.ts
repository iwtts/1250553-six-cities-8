import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';

import { State } from './state';
import { Offer } from './offer';
import { ActionType, SortType } from '../const';

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

type Actions = SetCityAction | SetOffersAction | ChangeSortTypeAction;
type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

export type {
  SetCityAction,
  SetOffersAction,
  ChangeSortTypeAction,
  Actions,
  ThunkActionResult,
  ThunkAppDispatch
};
