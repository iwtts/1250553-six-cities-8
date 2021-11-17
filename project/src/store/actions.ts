import { createAction } from '@reduxjs/toolkit';

import { Offer } from '../types/offer';
import { Review } from '../types/review';

import { ActionType, SortType, AuthStatus, AppRoute } from '../const';

const setCity = createAction(
  ActionType.SetCity,
  (currentCity: string) => ({
    payload: {
      currentCity: currentCity,
    },
  }),
);

const setOffer = createAction(
  ActionType.SetOffer,
  (offer: Offer) => ({
    payload: {
      updatedOffer: offer,
    },
  }),
);

const setOffersList = createAction(
  ActionType.SetOffers,
  (offers: Offer[]) => ({
    payload: {
      offers: offers,
    },
  }),
);


const changeSortType = createAction(
  ActionType.ChangeSortType,
  (sortType: SortType) => ({
    payload: {
      currentSortType: sortType,
    },
  }),
);

const loadOffers = createAction(
  ActionType.SetOffers,
  (offers: Offer[]) => ({
    payload: {
      offers,
    },
  }),
);

const loadReviews = createAction(
  ActionType.SetReviews,
  (reviews: Review[]) => ({
    payload: {
      reviews,
    },
  }),
);

const loadNearbyOffers = createAction(
  ActionType.SetNearbyOffers,
  (nearbyOffers: Offer[]) => ({
    payload: {
      nearbyOffers: nearbyOffers,
    },
  }),
);

const loadFavoriteOffers = createAction(
  ActionType.SetFavoriteOffers,
  (favoriteOffers: Offer[]) => ({
    payload: {
      favoriteOffers,
    },
  }),
);

const requireAuth = createAction(
  ActionType.RequireAuth,
  (authStatus: AuthStatus) => ({
    payload: {
      authStatus: authStatus,
    },
  }),
);

const requireLogout = createAction(ActionType.RequireLogout);

const changeUser = createAction(
  ActionType.ChangeUser,
  (currentUserEmail: string) => ({
    payload: {
      currentUserEmail,
    },
  }),
);

const redirectToRouter = createAction(
  ActionType.RedirectToRoute,
  (url: AppRoute) => ({
    payload: {
      url,
    },
  }),
);

export {
  setCity,
  setOffer,
  setOffersList,
  changeSortType,
  loadOffers,
  loadReviews,
  loadNearbyOffers,
  loadFavoriteOffers,
  requireAuth,
  requireLogout,
  changeUser,
  redirectToRouter
};

