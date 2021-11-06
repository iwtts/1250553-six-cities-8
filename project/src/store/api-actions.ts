import { ThunkActionResult } from '../types/action';
import { loadOffers, requireAuth} from './actions';
import { saveToken, Token } from '../services/token';
import { ApiRoute, AuthStatus } from '../const';
import { adaptOfferDataToClient } from '../utils';
import { AuthData ,DataOffer } from '../types/data';

const loadDataOffers = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get(ApiRoute.Offers);
    const offers = data.map((item: DataOffer) => adaptOfferDataToClient(item));
    dispatch(loadOffers(offers));
  };

const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(ApiRoute.Login)
      .then(() => {
        dispatch(requireAuth(AuthStatus.Auth));
      });
  };

const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(ApiRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuth(AuthStatus.Auth));
  };

export { loadDataOffers, checkAuthAction, loginAction };
