import { Link } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'react';

import clsx from 'clsx';

import { Actions } from '../../types/action';
import { State } from '../../types/state';

import { setCity } from '../../store/actions';
import { CITIES } from '../../const';
import { AppRoute } from '../../const';

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux ;

const mapStateToProps = ({currentCity}: State) => ({
  currentCity,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onCityChange(city: string) {
    dispatch(setCity(city));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

function Navigation(props: ConnectedComponentProps): JSX.Element {
  const {onCityChange, currentCity} = props;

  const handleNavigationItemClick = (evt: React.MouseEvent<HTMLAnchorElement>, city: string) => {
    evt.preventDefault();
    onCityChange(city);
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.keys(CITIES)
          .map((item) => (
            <li key={item} className="locations__item">
              <Link
                className={clsx('locations__item-link', 'tabs__item', item === currentCity && 'tabs__item--active')}
                to={AppRoute.Main}
                onClick={(evt) => handleNavigationItemClick(evt, item)}
              >
                <span>{item}</span>
              </Link>
            </li>))}
      </ul>
    </section>
  );
}

export { Navigation };
export default connector(Navigation);
