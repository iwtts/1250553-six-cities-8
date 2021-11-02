import { SetCityAction, SetOffersAction } from '../types/action';
import { ActionType } from '../const';
import { Offer } from '../types/offer';

const setCity = (activeCity: string): SetCityAction  => ({
  type: ActionType.SetCity,
  payload: activeCity,
});

const setOfferList = (offers: Offer[]): SetOffersAction => ({
  type: ActionType.SetOffers,
  payload: offers,
});

export { setCity, setOfferList };