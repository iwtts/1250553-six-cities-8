import { createReducer } from '@reduxjs/toolkit';

import { loadOffers, loadNearbyOffers, loadReviews, setCity, changeSortType, loadFavoriteOffers, setOffer } from '../../store/actions';
import { OffersState } from '../../types/state';
import { CITIES, SortType } from '../../const';
import { updateOffers } from '../../utils';

const INITIAL_CITY = CITIES.Paris.name;

const initialState: OffersState = {
  isDataLoaded: false,
  currentCity: INITIAL_CITY,
  offers: [],
  cityOffers: [],
  reviews: [],
  nearbyOffers: [],
  favoriteOffers: [],
  currentSortType: SortType.Popular,
};

const offersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload.offers;
      state.isDataLoaded = true;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload.nearbyOffers;
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload.favoriteOffers;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload.reviews;
    })
    .addCase(setOffer, (state, action) => {
      state.offers = updateOffers(state.offers, action.payload.updatedOffer);
      state.nearbyOffers = updateOffers(state.nearbyOffers, action.payload.updatedOffer);
      state.favoriteOffers = updateOffers(state.favoriteOffers, action.payload.updatedOffer).filter((offer) => offer.isFavorite);
    })
    .addCase(setCity, (state, action) => {
      state.currentCity = action.payload.currentCity;
    })
    .addCase(changeSortType, (state, action) => {
      state.currentSortType = action.payload.currentSortType;
    });
});

export { initialState, offersReducer };
