import { SortType } from '../../const';
import { getMockOffer, getMockOffers } from '../../mocks/offers';
import { getMockReviews } from '../../mocks/reviews';
import { getMockCityName } from '../../mocks/utils';
import { updateOffers } from '../../utils';
import { changeSortType, loadFavoriteOffers, loadNearbyOffers, loadOffers, loadReviews, setCity, setOffer } from '../actions';
import { initialState, offersReducer } from './reducer';

describe('Reducer: offersReducer', () => {
  it('without additional parameters should return initial state', () => {
    expect(offersReducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(initialState);
  });

  it('should update offers', () => {
    const mockOffers = getMockOffers();

    expect(offersReducer(initialState, loadOffers(mockOffers)))
      .toEqual({
        ...initialState,
        isDataLoaded: true,
        offers: mockOffers,
      });
  });

  it('should update offers nearby', () => {
    const mockOffers = getMockOffers();

    expect(offersReducer(initialState, loadNearbyOffers(mockOffers)))
      .toEqual({
        ...initialState,
        nearbyOffers: mockOffers,
      });
  });

  it('should update favorite offers', () => {
    const mockOffers = getMockOffers();

    expect(offersReducer(initialState, loadFavoriteOffers(mockOffers)))
      .toEqual({
        ...initialState,
        favoriteOffers: mockOffers,
      });
  });

  it('should update reviews', () => {
    const mockReviews = getMockReviews();

    expect(offersReducer(initialState, loadReviews(mockReviews)))
      .toEqual({
        ...initialState,
        reviews: mockReviews,
      });
  });

  it('should update all offers after updating one of the offers', () => {
    const mockOffer = getMockOffer();

    expect(offersReducer(initialState, setOffer(mockOffer)))
      .toEqual({
        ...initialState,
        offers: updateOffers(initialState.offers, mockOffer),
        nearbyOffers: updateOffers(initialState.nearbyOffers, mockOffer),
        favoriteOffers: updateOffers(initialState.favoriteOffers, mockOffer).filter((offer) => offer.isFavorite),
      });
  });

  it('should update current city', () => {
    const mockCity = getMockCityName();

    expect(offersReducer(initialState, setCity(mockCity)))
      .toEqual({
        ...initialState,
        currentCity: mockCity,
      });
  });

  it('should update current sort type', () => {
    const mockSortType = SortType.TopRatedFirst;

    expect(offersReducer(initialState, changeSortType(mockSortType)))
      .toEqual({
        ...initialState,
        currentSortType: mockSortType,
      });
  });
});
