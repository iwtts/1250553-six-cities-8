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

export type {
  SetCityAction,
  SetOffersAction,
  ChangeSortTypeAction,
  Actions
};
