import { offersReducer } from './reducer';
import { ActionType, CITIES, INITIAL_CITY ,SortType } from '../../const';

import { mockOffers } from '../../mocks/offers';
import { mockReviews } from '../../mocks/reviews';

const newOffers = mockOffers;

describe('Reducer: offersReducer', () => {

  it('should load offers', () => {

    const state = {
      isDataLoaded: false,
      currentCity: INITIAL_CITY,
      offers: [],
      cityOffers: [],
      reviews: [],
      nearbyOffers: [],
      favoriteOffers: [],
      currentSortType: SortType.Popular,
    };

    const loadOffers = {
      type: ActionType.SetOffers,
      payload: {
        offers: newOffers,
      },
    };

    expect(offersReducer(state, loadOffers))
      .toEqual({
        isDataLoaded: true,
        currentCity: INITIAL_CITY,
        offers: newOffers,
        cityOffers: [],
        reviews: [],
        nearbyOffers: [],
        favoriteOffers: [],
        currentSortType: SortType.Popular,
      });
  });

  it('should load offers nearby', () => {
    const state = {
      isDataLoaded: false,
      currentCity: INITIAL_CITY,
      offers: [],
      cityOffers: [],
      reviews: [],
      nearbyOffers: [],
      favoriteOffers: [],
      currentSortType: SortType.Popular,
    };

    const loadNearbyOffers = {
      type: ActionType.SetNearbyOffers,
      payload: {
        nearbyOffers: newOffers,
      },
    };

    expect(offersReducer(state, loadNearbyOffers))
      .toEqual({
        isDataLoaded: false,
        currentCity: INITIAL_CITY,
        offers: [],
        cityOffers: [],
        reviews: [],
        nearbyOffers: newOffers,
        favoriteOffers: [],
        currentSortType: SortType.Popular,
      });
  });

  it('should load favorite offers', () => {
    const state = {
      isDataLoaded: false,
      currentCity: INITIAL_CITY,
      offers: [],
      cityOffers: [],
      reviews: [],
      nearbyOffers: [],
      favoriteOffers: [],
      currentSortType: SortType.Popular,
    };

    const loadFavoriteOffers = {
      type: ActionType.SetFavoriteOffers,
      payload: {
        favoriteOffers: newOffers,
      },
    };

    expect(offersReducer(state, loadFavoriteOffers))
      .toEqual({
        isDataLoaded: false,
        currentCity: INITIAL_CITY,
        offers: [],
        cityOffers: [],
        reviews: [],
        nearbyOffers: [],
        favoriteOffers: newOffers,
        currentSortType: SortType.Popular,
      });
  });

  it('should set current city', () => {
    const newCity = CITIES.Amsterdam.name;

    const state = {
      isDataLoaded: false,
      currentCity: INITIAL_CITY,
      offers: [],
      cityOffers: [],
      reviews: [],
      nearbyOffers: [],
      favoriteOffers: [],
      currentSortType: SortType.Popular,
    };

    const setCurrentCity = {
      type: ActionType.SetCity,
      payload: {
        currentCity: newCity,
      },
    };

    expect(offersReducer(state, setCurrentCity))
      .toEqual({
        isDataLoaded: false,
        currentCity: newCity,
        offers: [],
        cityOffers: [],
        reviews: [],
        nearbyOffers: [],
        favoriteOffers: [],
        currentSortType: SortType.Popular,
      });
  });

  it('should change sort type', () => {
    const newSortType = SortType.TopRatedFirst;

    const state = {
      isDataLoaded: false,
      currentCity: INITIAL_CITY,
      offers: [],
      cityOffers: [],
      reviews: [],
      nearbyOffers: [],
      favoriteOffers: [],
      currentSortType: SortType.Popular,
    };

    const changeSortType = {
      type: ActionType.ChangeSortType,
      payload: {
        currentSortType: newSortType,
      },
    };

    expect(offersReducer(state, changeSortType))
      .toEqual({
        isDataLoaded: false,
        currentCity: INITIAL_CITY,
        offers: [],
        cityOffers: [],
        reviews: [],
        nearbyOffers: [],
        favoriteOffers: [],
        currentSortType: newSortType,
      });
  });

  it('should load reviews', () => {
    const newReviews = mockReviews;

    const state = {
      isDataLoaded: false,
      currentCity: INITIAL_CITY,
      offers: [],
      cityOffers: [],
      reviews: [],
      nearbyOffers: [],
      favoriteOffers: [],
      currentSortType: SortType.Popular,
    };

    const loadReviews = {
      type: ActionType.SetReviews,
      payload: {
        reviews: newReviews,
      },
    };

    expect(offersReducer(state, loadReviews))
      .toEqual({
        isDataLoaded: false,
        currentCity: INITIAL_CITY,
        offers: [],
        cityOffers: [],
        reviews: newReviews,
        nearbyOffers: [],
        favoriteOffers: [],
        currentSortType: SortType.Popular,
      });
  });

});
