import { connect, ConnectedProps}  from 'react-redux';
import { Router as BrowserRouter, Switch, Route } from 'react-router-dom';

import Loading from '../loading/loading';
import Main from '../main/main';
import Favourites from '../favorites/favorites';
import Property from '../property/property';
import Login from '../login/login';
import NotFound from '../not-found/not-found';

import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';

import { AppRoute, AuthStatus } from '../../const';
import { State } from '../../types/state';

type PropsFromRedux = ConnectedProps<typeof connector>
type ConnectedComponentProps = PropsFromRedux;

const isCheckedAuth = (authStatus: AuthStatus): boolean =>
  authStatus === AuthStatus.Unknown;

const mapStateToProps = ({authStatus, isDataLoaded, offers}: State) => ({
  authStatus,
  isDataLoaded,
  offers,
});

const connector = connect(mapStateToProps);

function App({authStatus, isDataLoaded}: ConnectedComponentProps): JSX.Element {
  if (isCheckedAuth(authStatus) || !isDataLoaded) {
    return (
      <Loading />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
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
        >
        </PrivateRoute>
        <Route exact path={`${AppRoute.Room}/:id`}>
          <Property />
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

