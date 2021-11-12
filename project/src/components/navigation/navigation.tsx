import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';

import { getCurrentCity } from '../../store/offers/selectors';
import { setCity } from '../../store/actions';
import { CITIES } from '../../const';
import { AppRoute } from '../../const';

function Navigation(): JSX.Element {
  const currentCity = useSelector(getCurrentCity);

  const dispatch = useDispatch();

  const handleNavigationItemClick = (evt: React.MouseEvent<HTMLAnchorElement>, city: string) => {
    evt.preventDefault();
    dispatch(setCity(city));
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

export default Navigation;
