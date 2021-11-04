import { Dispatch } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import Header from '../header/header';
import FavoritesCard from '../favorites-card/favorites-card';


import { setCity } from '../../store/actions';

import { State } from '../../types/state';
import { Actions } from '../../types/action';

type PropsFromRedux = ConnectedProps<typeof connector>;

const mapStateToProps = ({offers}: State) => ({
  offers,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onCityChange(city: string) {
    dispatch(setCity(city));
  },
});


const connector = connect(mapStateToProps, mapDispatchToProps);

function Favorites(props: PropsFromRedux): JSX.Element {
  const { offers } = props;

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers
                    .filter((offer) => offer.isFavorite)
                    .map((offer) => <FavoritesCard offer={offer} key={offer.id} />)}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export { Favorites };
export default connector(Favorites);
