import { useState } from 'react';

import Header from '../header/header';
import Navigation from '../navigation/navigation';
import CardsList from '../cards-list/cards-list';
import Map from '../map/map';

import { Offer } from '../../types/offer';

type MainProps = {
  cardsAmount: number;
  offers: Offer[];
}

function Main({cardsAmount, offers}: MainProps): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);

  const handleOfferMouseEnter = (offer: Offer | undefined) => {
    setSelectedOffer(offer);
  };

  const handleOfferMouseLeave = () => {
    setSelectedOffer(undefined);
  };

  const city = offers[0].city;

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Navigation />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{cardsAmount} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <CardsList
                offers={offers}
                onOfferMouseEnter={handleOfferMouseEnter}
                onOfferMouseLeave={handleOfferMouseLeave}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  cityLocation={city.location}
                  points={offers.map((offer) => ({title: offer.title, location: offer.location}))}
                  selectedPoint={selectedOffer}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
