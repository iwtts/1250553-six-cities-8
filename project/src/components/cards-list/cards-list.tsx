import { useState } from 'react';
import { Offer } from '../../types/offer';

import Card from '../card/card';

type CardsListProps = {
  offers: Offer[];
  onOfferMouseEnter: (offerId: number) => void;
  onOfferMouseLeave: () => void;
}

function CardsList({offers, onOfferMouseEnter,  onOfferMouseLeave}: CardsListProps): JSX.Element {
  const [, setActiveCardId] = useState<number | null>(null);

  const handleMouseEnter = (offerId: number) => {
    onOfferMouseEnter(offerId);
    setActiveCardId(offerId);
  };

  const handleMouseLeave = () => {
    onOfferMouseLeave();
    setActiveCardId(null);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <Card offer={offer} key={offer.id}  onMouseEnter={() => handleMouseEnter(offer.id)} onMouseLeave={() => handleMouseLeave}/>)}
    </div>
  );
}

export default CardsList;
