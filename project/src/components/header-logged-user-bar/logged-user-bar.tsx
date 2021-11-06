import { Link } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';

import { State } from '../../types/state';
import { ThunkAppDispatch } from '../../types/action';

import { AppRoute } from '../../const';
import { requireLogout} from '../../store/actions';


const mapStateToProps = ({currentUserEmail}: State) => ({
  currentUserEmail,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onLogoutClicked() {
    dispatch(requireLogout());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function LoggedUserBar({onLogoutClicked, currentUserEmail}: PropsFromRedux): JSX.Element {
  const handleClick = (evt: { preventDefault: () => void; }) => {
    evt.preventDefault();
    onLogoutClicked();
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
          onClick={handleClick}
        >
          <span className="header__signout">Sign out</span>
        </a>

      </li>
    </>
  );
}

export { LoggedUserBar };
export default connector(LoggedUserBar);
