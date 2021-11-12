import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';

import { AppRoute, CardType } from '../../const';
import { getRatingStarsWidth } from '../../utils';

type CardProps = {
  offer: Offer;
  type: CardType;
  onMouseEnter: (offer: Offer) => void,
  onMouseLeave: () => void,
}

const getArticleClassName = (type: CardType): string => {
  if (type === CardType.Property) {
    return 'near-places__card place-card';
  }
  return 'cities__place-card place-card';
};

const getImageWrapperClassName = (type: CardType): string => {
  if (type === CardType.Property) {
    return 'near-places__image-wrapper place-card__image-wrapper';
  }
  return 'cities__image-wrapper place-card__image-wrapper';
};

function Card(props: CardProps): JSX.Element {
  const {isPremium, previewImage, price, isFavorite, rating, title, type, id} = props.offer;

  const getBookmarkButtonClassName = () => {
    if (isFavorite) {
      return 'place-card__bookmark-button place-card__bookmark-button--active button button';
    }
    return 'place-card__bookmark-button button';
  };

  const handleMouseEnter = () => {
    props.onMouseEnter(props.offer);
  };

  const handleMouseLeave = () => {
    props.onMouseLeave();
  };

  return (
    <article
      className={getArticleClassName(props.type)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={getImageWrapperClassName(props.type)}>
        <Link to={`${AppRoute.Room}/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={getBookmarkButtonClassName()} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRatingStarsWidth(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Room}/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default memo(Card);
