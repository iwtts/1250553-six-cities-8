import { toast } from 'react-toastify';

import { ThunkActionResult } from '../types/action';
import { loadOffers, loadNearbyOffers, requireAuth, redirectToRouter, loadReviews, loadFavoriteOffers, setOffer, requireLogout, setAuthData } from './actions';
import { dropToken, saveToken, Token } from '../services/token';
import { AuthStatus, ApiRoute, AppRoute, FavoriteStatus, AUTH_FAIL_MESSAGE, ERROR_MESSAGE } from '../const';
import { adaptAuthDataToClient, adaptOfferDataToClient, adaptReviewDataToClient } from '../utils';
import { Comment } from '../types/review';
import { DataOffer, DataReview, UserAuthData } from '../types/data';

const checkAuth = (): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    await api.get(ApiRoute.Login)
      .then(({data}) => {
        dispatch(requireAuth(AuthStatus.Auth));
        dispatch(setAuthData(adaptAuthDataToClient(data)));
      })
      .catch(() => {
        toast.info(AUTH_FAIL_MESSAGE);
      });
  }
);

const login = ({login: email, password}: UserAuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.post<{token: Token}>(ApiRoute.Login, {email, password})
      .then(({data: {token}}) => {
        saveToken(token);
        dispatch(requireAuth(AuthStatus.Auth));
        dispatch(redirectToRouter(AppRoute.Main));
      })
      .catch(() => {
        toast.error(ERROR_MESSAGE);
      });
  };

const logout = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(ApiRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };

const loadDataOffers = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api.get(ApiRoute.Offers)
      .then(({data}) => {
        const offers = data.map((item: DataOffer) => adaptOfferDataToClient(item));
        dispatch(loadOffers(offers));
      })
      .catch(() => {
        toast.error(ERROR_MESSAGE);
      });
  };

const loadDataReviews = (offerId: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api.get(`${ ApiRoute.Reviews }/${ offerId }`)
      .then(({data}) => {
        const reviews = data.map((item: DataReview) => adaptReviewDataToClient(item));
        dispatch(loadReviews(reviews));
      })
      .catch(() => {
        toast.error(ERROR_MESSAGE);
      });
  };

const loadDataNearbyOffers = (id: string): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    await api.get(`${ ApiRoute.Hotels }/${ id }/nearby`)
      .then(({data}) => {
        const offersNearby = data.map((item: DataOffer) => adaptOfferDataToClient(item));
        dispatch(loadNearbyOffers(offersNearby));
      })
      .catch(() => {
        toast.error(ERROR_MESSAGE);
      });
  }
);

const loadDataFavoriteOffers = (): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    await api.get(ApiRoute.Favorite)
      .then(({data}) => {
        const favoriteOffers = data.map((item: DataOffer) => adaptOfferDataToClient(item));
        dispatch(loadFavoriteOffers(favoriteOffers));
      })
      .catch(() => {
        toast.error(ERROR_MESSAGE);
      });
  }
);

const postReview = ({comment, rating}: Comment, offerId: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    await api.post(`${ApiRoute.Reviews}/${offerId}`, {comment: comment, rating})
      .then(({data}) => {
        const reviews = data.map((item: DataReview) => adaptReviewDataToClient(item));
        dispatch(loadReviews(reviews));
      })
      .catch(() => {
        toast.error(ERROR_MESSAGE);
      });
  };

const togleFavoriteStatus = (offerId: number, status: boolean): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const favoriteStatus = status ? FavoriteStatus.False : FavoriteStatus.True;
    await api.post(`${ApiRoute.Favorite}/${offerId}/${favoriteStatus}`, {favoriteOffers: []})
      .then (({data}) => {
        const offer = adaptOfferDataToClient(data);
        dispatch(setOffer(offer));
      })
      .catch(() => {
        toast.error(ERROR_MESSAGE);
      });
  };

export { loadDataOffers, loadDataReviews, loadDataNearbyOffers, loadDataFavoriteOffers, checkAuth, login, logout, postReview, togleFavoriteStatus };
