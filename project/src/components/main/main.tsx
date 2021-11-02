import { Dispatch, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import Header from '../header/header';
import Navigation from '../navigation/navigation';
import CardsList from '../cards-list/cards-list';
import Map from '../map/map';

import { setCity} from '../../store/actions';

import { CITIES } from '../../const';

import { Offer } from '../../types/offer';
import { State } from '../../types/state';
import { Actions } from '../../types/action';

const mapStateToProps = ({offers, currentCity}: State) => ({
  offers: offers,
  currentCity,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onCityChange(city: string) {
    dispatch(setCity(city));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Main(props: PropsFromRedux): JSX.Element {
  const { currentCity, offers } = props;
  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);
  const city = Object.values(CITIES).find((item) =>  item.name === currentCity);

  const handleOfferMouseEnter = (offer: Offer | undefined) => {
    setSelectedOffer(offer);
  };

  const handleOfferMouseLeave = () => {
    setSelectedOffer(undefined);
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
              <b className="places__found">{offers.length} places to stay in {currentCity}</b>
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
                  cityLocation={city ? city.location : CITIES.Paris.location}
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

export { Main };
export default connector(Main);
