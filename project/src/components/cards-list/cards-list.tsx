import { Offer } from '../../types/offer';
import { CardType } from '../../const';

import Card from '../card/card';

type CardsListProps = {
  cardType: CardType;
  offers: Offer[];
  onOfferMouseEnter?: (offer: Offer) => void;
  onOfferMouseLeave?: () => void;
}

const getArticleClassName = (type: CardType): string => {
  if (type === CardType.Property) {
    return 'near-places__list places__list';
  }
  return 'cities__places-list places__list tabs__content';
};

function CardsList({cardType, offers, onOfferMouseEnter,  onOfferMouseLeave}: CardsListProps): JSX.Element {
  const handleMouseEnter = (offer: Offer) => {
    onOfferMouseEnter?.(offer);
  };

  return (
    <div className={getArticleClassName(cardType)} data-testid="cards-list">
      {offers.map((offer) => (
        <Card
          type={cardType}
          offer={offer}
          key={offer.id}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={onOfferMouseLeave}
        />
      ))}
    </div>
  );
}

export default CardsList;
