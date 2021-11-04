import React, {useEffect} from 'react';
import { Dispatch } from 'react';
import { connect, ConnectedProps}  from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { AppRoute, AuthStatus } from '../../const';

import Main from '../main/main';
import Favourites from '../favorites/favorites';
import Login from '../login/login';
import NotFound from '../not-found/not-found';
import Property from '../property/property';
import PrivateRoute from '../private-route/private-route';

import { Offer } from '../../types/offer';
import { Actions } from '../../types/action';
import { setOfferList } from '../../store/actions';

import { offers as mockOffers } from '../../mocks/offers';
import { reviews } from '../../mocks/reviews';

type PropsFromRedux = ConnectedProps<typeof connector>
type ConnectedComponentProps = PropsFromRedux;

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onOffersLoaded(offers: Offer[]) {
    dispatch(setOfferList(offers));
  },
});

const connector = connect(null, mapDispatchToProps);

function App(props: ConnectedComponentProps): JSX.Element {
  useEffect(() => {
    props.onOffersLoaded(mockOffers);
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <Login />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favourites />}
          authStatus={AuthStatus.Auth}
        >
        </PrivateRoute>
        <Route exact path={`${AppRoute.Room}/:id`}>
          <Property reviews={reviews}/>
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export {App};
export default connector(App);

