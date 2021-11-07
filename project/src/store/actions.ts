import { SetCityAction, SetOffersAction, ChangeSortTypeAction, RequireAuth, RequireLogout, ChangeUser, RedirectToRoute } from '../types/action';
import { Offer } from '../types/offer';
import { ActionType, SortType, AuthStatus, AppRoute } from '../const';

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

const changeUser = (login: string): ChangeUser => ({
  type: ActionType.ChangeUser,
  payload: {
    login,
  },
});

const redirectToRouter = (url: AppRoute): RedirectToRoute => ({
  type: ActionType.RedirectToRoute,
  payload: {
    url,
  },
});

export { setCity, setOfferList, changeSortType, loadOffers, requireAuth, requireLogout, changeUser, redirectToRouter };

