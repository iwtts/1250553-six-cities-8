import { createReducer } from '@reduxjs/toolkit';

import { loadOffers, loadNearbyOffers, loadReviews, setCity, changeSortType, loadFavoriteOffers } from '../../store/actions';
import { OffersState } from '../../types/state';
import { INITIAL_CITY, SortType } from '../../const';

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
    .addCase(setCity, (state, action) => {
      state.currentCity = action.payload.currentCity;
    })
    .addCase(changeSortType, (state, action) => {
      state.currentSortType = action.payload.currentSortType;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload.reviews;
    });
});

export { offersReducer };
