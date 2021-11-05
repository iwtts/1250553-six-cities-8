import {  SetCityAction, SetOffersAction, ChangeSortTypeAction } from '../types/action';
import { ActionType, SortType } from '../const';
import { Offer } from '../types/offer';

const setCity = (activeCity: string): SetCityAction  => ({
  type: ActionType.SetCity,
  payload: activeCity,
});

const setOfferList = (offers: Offer[]): SetOffersAction => ({
  type: ActionType.SetOffers,
  payload: offers,
});

const changeSortType = (sortType: SortType): ChangeSortTypeAction => ({
  type: ActionType.ChangeSortType,
  payload: {
    currentSortType: sortType,
  },
});

export { setCity, setOfferList, changeSortType };
