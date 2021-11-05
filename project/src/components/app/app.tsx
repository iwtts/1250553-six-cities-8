import { connect, ConnectedProps}  from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { AppRoute, AuthStatus } from '../../const';

import Loading from '../loading/loading';
import Main from '../main/main';
import Favourites from '../favorites/favorites';
import Login from '../login/login';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';

import { State } from '../../types/state';

type PropsFromRedux = ConnectedProps<typeof connector>
type ConnectedComponentProps = PropsFromRedux;

const mapStateToProps = ({isDataLoaded, offers}: State) => ({
  isDataLoaded,
  offers,
});

const connector = connect(mapStateToProps);

function App({isDataLoaded}: ConnectedComponentProps): JSX.Element {
  if (!isDataLoaded) {
    return (
      <Loading />
    );
  }

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

