import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';

import { State } from '../../types/state';
import { AppRoute, AuthStatus } from '../../const';

import LoggedUserBar from '../header-logged-user-bar/logged-user-bar';
import NotLoggedUserBar from '../header-not-logged-user-bar/not-logged-user-bar';


const mapStateToProps = ({authStatus}: State) => ({
  authStatus,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Header({authStatus}: PropsFromRedux): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.Main} className="header__logo-link">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authStatus === AuthStatus.Auth
                ? <LoggedUserBar />
                : <NotLoggedUserBar />}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export { Header };
export default connector(Header);


