import { Link } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'react';

import { Actions } from '../../types/action';
import { State } from '../../types/state';

import { setCity } from '../../store/actions';
import { CITIES } from '../../const';

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & NavigationCityProps;

type NavigationCityProps = {
  city: string,
}

const mapStateToProps = ({city}: State) => ({
  city,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onCityChange(city: string) {
    dispatch(setCity(city));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

function Navigation(props: ConnectedComponentProps): JSX.Element {
  const {onCityChange, city} = props;

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((item) => (
          <li key={item} className="locations__item">
            <Link
              className={`locations__item-link tabs__item ${item === city && 'tabs__item--active'}`}
              to="/"
              onClick={(evt) => {
                evt.preventDefault();
                onCityChange(item);
              }}
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
