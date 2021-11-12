import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';
import { SortType } from '../../const';

const getLoadingStatus = (state: State): boolean => state[NameSpace.Offers].isDataLoaded;
const getCurrentSortType = (state: State): SortType => state[NameSpace.Offers].currentSortType;
const getOffers = (state: State): Offer[] => state[NameSpace.Offers].offers;
const getCityOffers = (state: State): Offer[] => state[NameSpace.Offers].offers.filter((offer: Offer) => offer.city.name === getCurrentCity(state));
const getNearbyOffers = (state: State): Offer[] => state[NameSpace.Offers].nearbyOffers;
const getCurrentCity = (state: State): string  => state[NameSpace.Offers].currentCity;
const getReviews = (state: State): Review[] => state[NameSpace.Offers].reviews;

export {
  getLoadingStatus,
  getCurrentSortType,
  getOffers,
  getCityOffers,
  getNearbyOffers,
  getCurrentCity,
  getReviews
};
