import { ActionType } from '../const';
import { Actions } from '../types/action';
import { State } from '../types/state';
import { CITIES, SortType, AuthStatus } from '../const';

const CURRENT_CITY = CITIES.Paris.name;

const initialState: State = {
  authStatus: AuthStatus.Unknown,
  isDataLoaded: false,
  currentCity: CURRENT_CITY ,
  cityOffers: [],
  offers: [],
  currentSortType: SortType.Popular,
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
        isDataLoaded: true,
      };
    }
    case ActionType.ChangeSortType: {
      return{...state,
        currentSortType: action.payload.currentSortType,
      };
    }
    case ActionType.RequireAuth: {
      return{...state,
        authStatus: action.payload.authStatus,
      };
    }
    case ActionType.RequireLogout: {
      return {...state,
        authStatus: AuthStatus.NoAuth,
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer };
