import { combineReducers } from 'redux';
import { offersReducer } from './offers/reducer';
import { userReducer } from './user/reducer';

import { NameSpace } from '../const';


const rootReducer = combineReducers({
  [NameSpace.Offers]: offersReducer,
  [NameSpace.User]: userReducer,
});

type RootState = ReturnType<typeof rootReducer>

export { rootReducer };
export type { RootState };
