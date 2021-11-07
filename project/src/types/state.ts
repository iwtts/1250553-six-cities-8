import { Offer } from '../types/offer';
import { SortType, AuthStatus } from '../const';

type State = {
  authStatus: AuthStatus,
  isDataLoaded: boolean,
  offers: Offer[],
  cityOffers: Offer[],
  currentCity: string,
  currentSortType: SortType,
  currentUserEmail: string,
};

export type { State };

