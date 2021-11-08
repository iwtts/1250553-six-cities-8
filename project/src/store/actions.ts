import { SetCity, SetOffers, SetReviews, SetNearbyOffers ,ChangeSortType, RequireAuth, RequireLogout, ChangeUser, RedirectToRoute } from '../types/action';
import { Offer } from '../types/offer';
import { Review } from '../types/review';

import { ActionType, SortType, AuthStatus, AppRoute } from '../const';

const setCity = (activeCity: string): SetCity  => ({
  type: ActionType.SetCity,
  payload: activeCity,
});

const setOfferList = (offers: Offer[]): SetOffers => ({
  type: ActionType.SetOffers,
  payload: offers,
});

const changeSortType = (sortType: SortType): ChangeSortType => ({
  type: ActionType.ChangeSortType,
  payload: {
    currentSortType: sortType,
  },
});

const loadOffers = (offers: Offer[]): SetOffers => ({
  type: ActionType.SetOffers,
  payload: offers,
});

const loadReviews = (reviews: Review[]): SetReviews => ({
  type: ActionType.SetReviews,
  payload: reviews,
});

const loadNearbyOffers = (nearbyOffers: Offer[]): SetNearbyOffers => ({
  type: ActionType.SetNearbyOffers,
  payload: nearbyOffers,
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

export { setCity, setOfferList, changeSortType, loadOffers, loadReviews, loadNearbyOffers, requireAuth, requireLogout, changeUser, redirectToRouter };

