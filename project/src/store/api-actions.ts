import { ThunkActionResult } from '../types/action';
import { loadOffers, loadNearbyOffers, requireAuth, redirectToRouter, loadReviews, loadFavoriteOffers, changeUser, setOffer } from './actions';
import { saveToken, Token } from '../services/token';
import { AuthStatus, ApiRoute, AppRoute, FavoriteStatus } from '../const';
import { adaptOfferDataToClient, adaptReviewDataToClient } from '../utils';
import { Comment } from '../types/review';
import { AuthData ,DataOffer, DataReview } from '../types/data';

const loadDataOffers = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get(ApiRoute.Offers);
    const offers = data.map((item: DataOffer) => adaptOfferDataToClient(item));
    dispatch(loadOffers(offers));
  };

const loadDataReviews = (offerId: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get(`${ ApiRoute.Reviews }/${ offerId }`);
    const reviews = data.map((item: DataReview) => adaptReviewDataToClient(item));
    dispatch(loadReviews(reviews));
  };

const loadDataNearbyOffers = (id: string): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get(`${ ApiRoute.Hotels }/${ id }/nearby`);
    const offersNearby = data.map((item: DataOffer) => adaptOfferDataToClient(item));
    dispatch(loadNearbyOffers(offersNearby));
  }
);

const loadDataFavoriteOffers = (): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get(ApiRoute.Favorite);
    const favoriteOffers = data.map((item: DataOffer) => adaptOfferDataToClient(item));
    dispatch(loadFavoriteOffers(favoriteOffers));
  }
);

const checkAuth = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(ApiRoute.Login)
      .then(({data}): void => {
        dispatch(requireAuth(AuthStatus.Auth));
        dispatch(changeUser(data.email));
      });
  };

const login = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(ApiRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuth(AuthStatus.Auth));
    dispatch(redirectToRouter(AppRoute.Main));
  };

const postReview = ({comment, rating}: Comment, offerId: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.post(`${ApiRoute.Reviews}/${offerId}`, {comment: comment, rating});
    const reviews = data.map((item: DataReview) => adaptReviewDataToClient(item));
    dispatch(loadReviews(reviews));
  };

const togleFavoriteStatus = (offerId: number, status: boolean): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const favoriteStatus = status ? FavoriteStatus.False : FavoriteStatus.True;
    const {data} = await api.post(`${ApiRoute.Favorite}/${offerId}/${favoriteStatus}`, {favoriteOffers: []});
    const offer = adaptOfferDataToClient(data);
    dispatch(setOffer(offer));
  };

export { loadDataOffers, loadDataReviews, loadDataNearbyOffers, loadDataFavoriteOffers, checkAuth, login, postReview, togleFavoriteStatus };
