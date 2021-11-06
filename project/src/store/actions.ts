import { SetCityAction, SetOffersAction, ChangeSortTypeAction, RequireAuth, RequireLogout } from '../types/action';
import { Offer } from '../types/offer';
import { ActionType, SortType, AuthStatus } from '../const';

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

const loadOffers = (offers: Offer[]): SetOffersAction => ({
  type: ActionType.SetOffers,
  payload: offers,
});

const requireAuth = (authStatus: AuthStatus): RequireAuth  => ({
  type: ActionType.RequireAuth,
  payload: {
    authStatus: authStatus,
  },
});

const requireLogout = (): RequireLogout => ({
  type: ActionType.RequireLogout,
});

export { setCity, setOfferList, changeSortType, loadOffers, requireAuth, requireLogout };
