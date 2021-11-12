import { Offer } from '../types/offer';
import { Review } from './review';
import { SortType, AuthStatus } from '../const';
import { RootState } from '../store/root-reducer';

type OffersState = {
  // authStatus: AuthStatus,
  isDataLoaded: boolean,
  offers: Offer[],
  reviews: Review[],
  cityOffers: Offer[],
  currentCity: string,
  nearbyOffers: Offer[],
  currentSortType: SortType,
  // currentUserEmail: string,
};

type UserState = {
  authStatus: AuthStatus,
  currentUserEmail: string,
}

type State = RootState;

export type { OffersState, UserState, State };

