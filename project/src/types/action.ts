import { Offer } from './offer';
import { ActionType } from '../const';

type SetCityAction = {
  type: ActionType.SetCity;
  payload: string;
}

type SetOffersAction = {
  type: ActionType.SetOffers;
  payload: Offer[];
}

type Actions = SetCityAction | SetOffersAction;

export type {
    SetCityAction,
    SetOffersAction,
    Actions,
}