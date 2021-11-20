import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getUserEmail, getUserAvatarUrl } from '../../store/user/selectors';
import { logout } from '../../store/api-actions';

import { AppRoute } from '../../const';

function LoggedUserBar(): JSX.Element {
  const currentUserEmail = useSelector(getUserEmail);
  const currentUserAvatarUrl = useSelector(getUserAvatarUrl);

  const dispatch = useDispatch();

  const handleSignOutClick = (evt: { preventDefault: () => void; }) => {
    evt.preventDefault();
    dispatch(logout());
  };

  return (
    <>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
          <div className="header__avatar-wrapper user__avatar-wrapper" style={{backgroundImage: `url(${currentUserAvatarUrl})`}}>
          </div>
          <span className="header__user-name user__name">{currentUserEmail}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <a
          className="header__nav-link"
          href="#"
          onClick={handleSignOutClick}
        >
          <span className="header__signout">Sign out</span>
        </a>
      </li>
    </>
  );
}

export default LoggedUserBar;
