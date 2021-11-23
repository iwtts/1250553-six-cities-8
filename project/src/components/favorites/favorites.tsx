import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteOffers } from '../../store/offers/selectors';

import Header from '../header/header';
import FavoritesCardsList from '../favorites-cards-list/favorites-cards-list';
import FavoritesEmpty from '../favorites-empty/favorites-empty';

import { CITIES } from '../../const';
import { loadDataFavoriteOffers } from '../../store/api-actions';
import { useEffect } from 'react';

function Favorites(): JSX.Element {
  const offers = useSelector(getFavoriteOffers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDataFavoriteOffers());
  },[dispatch]);

  return (
    <div className="page">
      <Header />
      {
        offers.length === 0
          ? <FavoritesEmpty />
          : (
            <main className="page__main page__main--favorites">
              <div className="page__favorites-container container">
                <section className="favorites">
                  <h1 className="favorites__title">Saved listing</h1>
                  <ul className="favorites__list">
                    {Object.values(CITIES).map((item) => (
                      <FavoritesCardsList
                        key={item.name}
                        city={item.name}
                      />
                    ))}
                  </ul>
                </section>
              </div>
            </main>
          )
      }
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default Favorites;
