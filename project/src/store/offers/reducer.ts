import { createReducer } from '@reduxjs/toolkit';

import { loadOffers, loadNearbyOffers, loadReviews, setCity, changeSortType } from '../../store/actions';
import { OffersState } from '../../types/state';
import { CITIES, SortType } from '../../const';

const INITIAL_CITY = CITIES.Paris.name;

const initialState: OffersState = {
  isDataLoaded: false,
  currentCity: INITIAL_CITY,
  offers: [],
  cityOffers: [],
  reviews: [],
  nearbyOffers: [],
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
