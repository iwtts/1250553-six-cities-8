import { useState } from 'react';
import { Offer } from '../../types/offer';

import Card from '../card/card';

type CardsListProps = {
  offers: Offer[];
}

function CardsList({offers}: CardsListProps): JSX.Element {
  const [, setActiveCardId] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => {
    setActiveCardId(id);
  };

  const handleMouseLeave = () => {
    setActiveCardId(null);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <Card offer={offer} key={offer.id}  onMouseEnter={() => handleMouseEnter(offer.id)} onMouseLeave={() => handleMouseLeave}/>)}
    </div>
  );
}

export default CardsList;
