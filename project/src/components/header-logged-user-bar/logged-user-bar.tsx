import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { requireLogout} from '../../store/actions';
import { getUserEmail } from '../../store/user/selectors';
import { AppRoute } from '../../const';

function LoggedUserBar(): JSX.Element {
  const currentUserEmail = useSelector(getUserEmail);
  const dispatch = useDispatch();

  const handleSignOutClick = (evt: { preventDefault: () => void; }) => {
    evt.preventDefault();
    dispatch(requireLogout());
  };

  return (
    <>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
          <div className="header__avatar-wrapper user__avatar-wrapper">
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
