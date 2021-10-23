import Card from '../card/card';

import { Offer } from '../../types/offer';

type CardsListProps = {
  offers: Offer[];
}

function CardsList({offers}: CardsListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <Card offer={offer} key={offer.id}/>)}
    </div>
  );
}

export default CardsList;
