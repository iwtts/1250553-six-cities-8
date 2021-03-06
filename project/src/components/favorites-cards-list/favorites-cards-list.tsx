import { useSelector } from 'react-redux';
import FavoritesCard from '../favorites-card/favorites-card';
import { getFavoriteOffers } from '../../store/offers/selectors';

type FavoritesCardsListProps = {
  city: string;
}

function FavoritesCardsList(props: FavoritesCardsListProps): JSX.Element | null {
  const city = props.city;
  const offers = useSelector(getFavoriteOffers);
  const currentOffers = offers.filter((offer) => offer.city.name === city);

  if (currentOffers.length !== 0) {
    return (
      <li className="favorites__locations-items" data-testid="favorites-cards-list">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>{city}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {currentOffers.map((offer) => <FavoritesCard offer={offer} key={offer.id} />)}
        </div>
      </li>
    );
  }
  return null;
}

export default FavoritesCardsList;
