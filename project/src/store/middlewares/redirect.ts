import { Middleware } from 'redux';
import { reducer } from '../reducer';

import browserHistory from '../../browser-history';
import { ActionType } from '../../const';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action) => {

        if (action.type === ActionType.RedirectToRoute) {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
