import { useState } from 'react';
import { Offer } from '../../types/offer';

import Card from '../card/card';

type CardsListProps = {
  offers: Offer[];
}

function CardsList({offers}: CardsListProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <Card offer={offer} key={offer.id}  onMouseEnter={() => setActiveCardId(offer.id)} onMouseLeave={() => setActiveCardId(null)}/>)}
    </div>
  );
}

export default CardsList;
