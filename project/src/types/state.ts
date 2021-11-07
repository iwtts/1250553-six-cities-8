import { Offer } from '../types/offer';
import { SortType, AuthStatus } from '../const';
import { DataOffer } from './data';

type State = {
  authStatus: AuthStatus,
  isDataLoaded: boolean,
  offers: Offer[],
  cityOffers: Offer[],
  currentCity: string,
  dataNearbyOffers: DataOffer[],
  currentSortType: SortType,
  currentUserEmail: string,
};

export type { State };

