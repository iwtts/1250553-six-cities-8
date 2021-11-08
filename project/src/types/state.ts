import { Offer } from '../types/offer';
import { Review } from './review';
import { SortType, AuthStatus } from '../const';

type State = {
  authStatus: AuthStatus,
  isDataLoaded: boolean,
  offers: Offer[],
  reviews: Review[],
  cityOffers: Offer[],
  currentCity: string,
  nearbyOffers: Offer[],
  currentSortType: SortType,
  currentUserEmail: string,
};

export type { State };

