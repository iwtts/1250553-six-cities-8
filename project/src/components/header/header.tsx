import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAuthStatus } from '../../store/user/selectors';
import { AppRoute, AuthStatus, HeaderType } from '../../const';

import LoggedUserBar from '../header-logged-user-bar/logged-user-bar';
import NotLoggedUserBar from '../header-not-logged-user-bar/not-logged-user-bar';

type HeaderProps = {
  type?: HeaderType,
}

function Header(props: HeaderProps): JSX.Element {
  const authStatus = useSelector(getAuthStatus);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.Main} className="header__logo-link">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          {props.type !== HeaderType.Login &&
            <nav className="header__nav">
              <ul className="header__nav-list">
                {authStatus === AuthStatus.Auth
                  ? <LoggedUserBar />
                  : <NotLoggedUserBar />}
              </ul>
            </nav>}
        </div>
      </div>
    </header>
  );
}

export default Header;
