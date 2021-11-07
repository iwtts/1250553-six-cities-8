import { Middleware } from 'redux';
import { reducer } from '../reducer';

import { ActionType } from '../../const';
import browserHistory from '../../browser-history';

type Reducer = ReturnType<typeof reducer>;

const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action) => {

        if (action.type === ActionType.RedirectToRoute) {
          browserHistory.push(action.payload);
        }

        return next(action);
      };

export { redirect };
