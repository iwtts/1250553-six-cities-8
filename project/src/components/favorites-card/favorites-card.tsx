import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { togleFavoriteStatus } from '../../store/api-actions';
import { Offer } from '../../types/offer';
import { getOfferTypeString, getRatingStarsWidth } from '../../utils';

type FavoritesCardProps = {
  offer: Offer;
}

function FavoritesCard(props: FavoritesCardProps): JSX.Element {
  const offer = props.offer;
  const {isFavorite, previewImage, price, rating, title, type, id} = offer;

  const dispatch = useDispatch();

  const handleBookmarkClick = () => {
    dispatch(togleFavoriteStatus(id, isFavorite));
  };

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Room}/${id}`}>
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
            onClick={handleBookmarkClick}
          >
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
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{getOfferTypeString(type)}</p>
      </div>
    </article>
  );
}

export default FavoritesCard;
