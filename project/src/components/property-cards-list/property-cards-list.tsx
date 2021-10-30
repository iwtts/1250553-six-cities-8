import { Offer } from '../../types/offer';

import Card from '../card/card';

type PropertyCardsListProps = {
  offers: Offer[],
  onOfferMouseEnter: (offer: Offer) => void;
  onOfferMouseLeave: () => void;
}

function PropertyCardsList({offers, onOfferMouseEnter,  onOfferMouseLeave}: PropertyCardsListProps): JSX.Element {

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers.map((offer) => (
          <Card
            key={offer.id}
            offer={offer}
            onMouseEnter={() => onOfferMouseEnter(offer)}
            onMouseLeave={() => onOfferMouseLeave}
          />))}
      </div>
    </section>
  );
}

export default PropertyCardsList;
