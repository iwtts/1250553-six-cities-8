import { ThunkActionResult } from '../types/action';
import { loadOffers, requireAuth, changeUser, redirectToRouter } from './actions';
import { saveToken, Token } from '../services/token';
import { AuthStatus, ApiRoute, AppRoute } from '../const';
import { adaptOfferDataToClient } from '../utils';
import { AuthData ,DataOffer } from '../types/data';

const loadDataOffers = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get(ApiRoute.Offers);
    const offers = data.map((item: DataOffer) => adaptOfferDataToClient(item));
    dispatch(loadOffers(offers));
  };

const checkAuth = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(ApiRoute.Login)
      .then((response): void => {
        dispatch(requireAuth(AuthStatus.Auth));
        dispatch(changeUser(response.data.currentUserEmail));
      });
  };

const login = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(ApiRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuth(AuthStatus.Auth));
    dispatch(redirectToRouter(AppRoute.Main));
  };

export { loadDataOffers, checkAuth, login };
