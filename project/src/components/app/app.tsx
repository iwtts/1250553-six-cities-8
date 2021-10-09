import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppRoute } from '../../const';

import Main from '../main/main';
import Favourites from '../favorites/favorites';
import Login from '../login/login';
import NotFound from '../not-found/not-found';
import Property from '../property/property';

type AppProps = {
  cardsAmount: number;
}

function App({cardsAmount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main
            cardsAmount={cardsAmount}
          />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <Login />
        </Route>
        <Route exact path={AppRoute.Favorites}>
          <Favourites />
        </Route>
        <Route exact path={AppRoute.Room}>
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
