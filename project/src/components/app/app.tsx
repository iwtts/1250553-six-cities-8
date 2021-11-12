import { useSelector }  from 'react-redux';
import { Router as BrowserRouter, Switch, Route } from 'react-router-dom';

import Loading from '../loading/loading';
import Main from '../main/main';
import Favourites from '../favorites/favorites';
import Property from '../property/property';
import Login from '../login/login';
import NotFound from '../not-found/not-found';

import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';
import { getAuthStatus } from '../../store/user/selectors';
import { getLoadingStatus } from '../../store/offers/selectors';

import { AppRoute, AuthStatus } from '../../const';

function App(): JSX.Element {
  const authStatus = useSelector(getAuthStatus);
  const isDataLoaded = useSelector(getLoadingStatus);

  if (authStatus === AuthStatus.Unknown || !isDataLoaded) {
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

export default App;
