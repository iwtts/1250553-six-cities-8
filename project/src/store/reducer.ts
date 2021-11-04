import { ActionType } from '../const';
import { Actions } from '../types/action';
import { State } from '../types/state';
import { CITIES } from '../const';

const CURRENT_CITY = CITIES.Paris.name;

const initialState: State = {
  currentCity: CURRENT_CITY ,
  cityOffers: [],
  offers: [],
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SetCity: {
      return {...state,
        currentCity: action.payload,
        cityOffers: state.offers.filter((offer) => offer.city.name === action.payload),
      };
    }
    case ActionType.SetOffers: {
      return {...state,
        offers: action.payload,
        cityOffers: action.payload.filter((offer) => offer.city.name === state.currentCity),
      };
    }
    default:
      return state;
  }
};

export { reducer };
