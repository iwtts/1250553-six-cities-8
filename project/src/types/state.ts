import { Offer } from '../types/offer';

type State = {
  offers: Offer[];
  cityOffers: Offer[];
  currentCity: string,
};

export type { State };

