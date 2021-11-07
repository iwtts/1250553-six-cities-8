import { Dispatch, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import Header from '../header/header';
import Navigation from '../navigation/navigation';
import Sort from '../sort/sort';
import CardsList from '../cards-list/cards-list';
import Map from '../map/map';

import { setCity, requireLogout } from '../../store/actions';

import { CITIES, SortType } from '../../const';

import { Offer } from '../../types/offer';
import { State } from '../../types/state';
import { Actions } from '../../types/action';

const getSortedOffers = (currentSortType: string, offers: Offer[]) => {
  switch(currentSortType){
    case SortType.PriceIncrease: {
      return offers.slice().sort((offerA, offerB) => offerA.price - offerB.price);
    }
    case SortType.PriceDecrease: {
      return offers.slice().sort((offerA, offerB) => offerB.price - offerA.price);
    }
    case SortType.TopRatedFirst: {
      return offers.slice().sort((offerA, offerB) => offerB.rating - offerA.rating);
    }
    default: {
      return offers;
    }
  }
};

const mapStateToProps = ({offers, currentCity, currentSortType}: State) => ({
  offers,
  currentCity,
  currentSortType,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onCityChange(city: string) {
    dispatch(setCity(city));
  },
  onLogout: () => dispatch(requireLogout()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Main(props: PropsFromRedux): JSX.Element {
  const { currentCity, currentSortType, offers } = props;
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);
  const city = Object.values(CITIES).find((item) =>  item.name === currentCity);
  const sortedOffers = getSortedOffers(currentSortType, offers);
  const currentOffers = sortedOffers.filter((offer: Offer) => offer.city.name === currentCity);

  const handleOfferMouseEnter = (offer: Offer | null) => {
    setSelectedOffer(offer);
  };

  const handleOfferMouseLeave = () => {
    setSelectedOffer(null);
  };

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
              <b className="places__found">{currentOffers.length} places to stay in {currentCity}</b>
              <Sort />
              <CardsList
                offers={currentOffers}
                onOfferMouseEnter={handleOfferMouseEnter}
                onOfferMouseLeave={handleOfferMouseLeave}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  cityLocation={city ? city.location : CITIES.Paris.location}
                  points={currentOffers.map((offer) => ({title: offer.title, location: offer.location}))}
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

export { Main };
export default connector(Main);
