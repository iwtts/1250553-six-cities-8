import { SetCityAction, SetOffersAction, ChangeSortTypeAction, ThunkActionResult } from '../types/action';
import { Offer } from '../types/offer';
import { ActionType, SortType, ApiRoute } from '../const';
import { adaptOfferDataToClient } from '../utils';

const setCity = (activeCity: string): SetCityAction  => ({
  type: ActionType.SetCity,
  payload: activeCity,
});

const setOfferList = (offers: Offer[]): SetOffersAction => ({
  type: ActionType.SetOffers,
  payload: offers,
});

const changeSortType = (sortType: SortType): ChangeSortTypeAction => ({
  type: ActionType.ChangeSortType,
  payload: {
    currentSortType: sortType,
  },
});

const loadOffers = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get(ApiRoute.Offers);
    const offers = data.map((item: unknown) => adaptOfferDataToClient(item));
    dispatch(setOfferList(offers));
  };

export { setCity, setOfferList, changeSortType, loadOffers };
