import { Offer } from '../types/offer';
import { SortType } from '../const';

type State = {
  offers: Offer[],
  cityOffers: Offer[],
  currentCity: string,
  currentSortType: SortType,
};

export type { State };

