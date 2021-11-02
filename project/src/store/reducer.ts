import { ActionType } from '../const';
import { Actions } from '../types/action';
import { State } from '../types/state';
import { offers } from '../mocks/offers';

const CURRENT_CITY  = offers[0].city.name;

const initialState: State = {
  city: CURRENT_CITY,
  offers: offers.filter((offer) => offer.city.name === CURRENT_CITY),
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SetCity:
      return {...state, city: action.payload};
    case ActionType.SetOffers:
      return {...state, offers: action.payload};
    default:
      return state;
  }
};

export { reducer };
