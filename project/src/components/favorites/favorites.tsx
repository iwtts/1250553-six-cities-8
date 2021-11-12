import Header from '../header/header';
import FavoritesCardsList from '../favorites-cards-list/favorites-cards-list';

function Favorites(): JSX.Element {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <FavoritesCardsList city={'Paris'} />
              <FavoritesCardsList city={'Cologne'} />
              <FavoritesCardsList city={'Brussels'} />
              <FavoritesCardsList city={'Amsterdam'} />
              <FavoritesCardsList city={'Hamburg'} />
              <FavoritesCardsList city={'Dusseldorf'} />
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

export default Favorites;
