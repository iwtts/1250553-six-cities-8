import { Offer } from '../../types/offer';
import { CardType } from '../../const';

import Card from '../card/card';

type CardsListProps = {
  offers: Offer[];
  onOfferMouseEnter: (offer: Offer) => void;
  onOfferMouseLeave: () => void;
}

function CardsList({offers, onOfferMouseEnter,  onOfferMouseLeave}: CardsListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <Card offer={offer} type={CardType.Main} key={offer.id}  onMouseEnter={() => onOfferMouseEnter(offer)} onMouseLeave={() => onOfferMouseLeave}/>)}
    </div>
  );
}

export default CardsList;
