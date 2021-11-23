import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { datatype } from 'faker';

import { createApi } from '../services/api';
import { checkAuth, loadDataFavoriteOffers, loadDataNearbyOffers, loadDataOffers, loadDataReviews, postReview } from './api-actions';
import { ApiRoute, AuthStatus } from '../const';
import { State } from '../types/state';
import { loadFavoriteOffers, loadNearbyOffers, loadOffers, loadReviews, requireAuth, setAuthData } from './actions';
import { getMockDataUserAuthData } from '../mocks/user';
import { adaptAuthDataToClient, adaptOfferDataToClient, adaptReviewDataToClient } from '../utils';
import { getMockDataOffers } from '../mocks/offers';
import { DataOffer, DataReview } from '../types/data';
import { getMockDataReviews } from '../mocks/reviews';

describe('Async actions', () => {
  const onFakeUnauthorized = jest.fn();
  const api = createApi(onFakeUnauthorized());
  const mockApi = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockDataUser = getMockDataUserAuthData();
  const mockDataOffers = getMockDataOffers();
  const mockDataReviews = getMockDataReviews();

  const mockStore = configureMockStore<
      State,
      Action,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should update authorization status to «AUTH» when server return 200', async () => {
    const store = mockStore();
    mockApi
      .onGet(ApiRoute.Login)
      .reply(200, mockDataUser);

    await store.dispatch(checkAuth());

    expect(store.getActions()).toEqual([
      requireAuth(AuthStatus.Auth),
      setAuthData(adaptAuthDataToClient(mockDataUser)),
    ]);
  });

  it('should update authorization status to "NO_AUTH" when server return 401', async () => {
    const store = mockStore();

    mockApi
      .onGet(ApiRoute.Login)
      .reply(401);

    await store.dispatch(checkAuth());

    expect(store.getActions()).toEqual([
      requireAuth(AuthStatus.NoAuth),
    ]);
  });

  it('should dispatch loadOffers when GET /hotels', async () => {
    const store = mockStore();
    const adaptedOffers = mockDataOffers.map((item: DataOffer) => adaptOfferDataToClient(item));

    mockApi
      .onGet(ApiRoute.Hotels)
      .reply(200, mockDataOffers);

    await store.dispatch(loadDataOffers());

    expect(store.getActions()).toEqual([
      loadOffers(adaptedOffers),
    ]);
  });

  it('should dispatch loadReviews when GET /comments/:id', async () => {
    const store = mockStore();
    const mockOfferId = datatype.number().toString();
    const adaptedReviews = mockDataReviews.map((item: DataReview) => adaptReviewDataToClient(item));

    mockApi
      .onGet(`${ ApiRoute.Reviews }/${ mockOfferId }`)
      .reply(200, mockDataReviews);

    await store.dispatch(loadDataReviews(mockOfferId));

    expect(store.getActions()).toEqual([
      loadReviews(adaptedReviews),
    ]);
  });

  it('should dispatch loadNearbyOffers when GET /hotels/:id/nearby', async () => {
    const store = mockStore();
    const mockOfferId = datatype.number().toString();
    const adaptedOffers = mockDataOffers.map((item: DataOffer) => adaptOfferDataToClient(item));

    mockApi
      .onGet(`${ ApiRoute.Hotels }/${ mockOfferId }/nearby`)
      .reply(200, mockDataOffers);

    await store.dispatch(loadDataNearbyOffers(mockOfferId));

    expect(store.getActions()).toEqual([
      loadNearbyOffers(adaptedOffers),
    ]);
  });
  it('should dispatch loadFavoriteOffers when GET /favorite', async () => {
    const store = mockStore();
    const adaptedOffers = mockDataOffers.map((item: DataOffer) => adaptOfferDataToClient(item));

    mockApi
      .onGet(ApiRoute.Favorite)
      .reply(200, mockDataOffers);

    await store.dispatch(loadDataFavoriteOffers());

    expect(store.getActions()).toEqual([
      loadFavoriteOffers(adaptedOffers),
    ]);
  });

  it('should dispatch loadReviews when POST /comments/:id', async () => {
    const store = mockStore();
    const mockOfferId = datatype.number().toString();
    const adaptedReviews = mockDataReviews.map((item: DataReview) => adaptReviewDataToClient(item));

    const mockComment = {
      comment: datatype.string(),
      rating: datatype.number(5).toString(),
    };

    mockApi
      .onPost(`${ApiRoute.Reviews}/${mockOfferId}`)
      .reply(200, mockDataReviews);

    await store.dispatch(postReview(mockComment, mockOfferId));

    expect(store.getActions()).toEqual([
      loadReviews(adaptedReviews),
    ]);
  });
});
