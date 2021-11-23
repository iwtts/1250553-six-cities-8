import { Offer } from '../types/offer';
import { Review } from './review';
import { SortType, AuthStatus } from '../const';
import { RootState } from '../store/root-reducer';
import { User } from './data';


type OffersState = {
  isDataLoaded: boolean,
  offers: Offer[],
  reviews: Review[],
  cityOffers: Offer[],
  currentCity: string,
  nearbyOffers: Offer[],
  favoriteOffers: Offer[],
  currentSortType: SortType,
};

type UserState = {
  authStatus: AuthStatus,
  authData: User | null,
}

type State = RootState;

export type { OffersState, UserState, State };

