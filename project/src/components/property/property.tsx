import { connect, ConnectedProps } from 'react-redux';
import { useParams } from 'react-router';

import Header from '../header/header';
import NotFound from '../not-found/not-found';
import Map from '../map/map';

import { State } from '../../types/state';
import { MapType } from '../../const';
import { getRatingStarsWidth } from '../../utils';
import { ThunkAppDispatch } from '../../types/action';
import { loadDataNearbyOffers } from '../../store/api-actions';

const mapStateToProps = ({ offers, nearbyOffers }: State) => ({
  offers,
  nearbyOffers,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  getNearbyOffers(id: string) {
    dispatch(loadDataNearbyOffers(id));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Property({offers, nearbyOffers, getNearbyOffers}: PropsFromRedux): JSX.Element {
  const {id} = useParams() as {id: string};
  const offer = offers.find((item) => item.id.toString() === id);

  if (!offer) {
    return <NotFound />;
  }

  const { isFavorite, images, isPremium, title, rating, type, bedrooms, maxAdults, price, goods, host, description } = offer;

  getNearbyOffers(id);

  const nearbyPoints = nearbyOffers.map((item) => ({
    latitude: item.location.latitude,
    longitude: item.location.longitude,
    id: item.id,
  }));

  const currentPoint = {
    latitude: offer.location.latitude,
    longitude: offer.location.longitude,
    id: offer.id,
  };

  const getBookmarkButtonClassName = () => {
    if (isFavorite) {
      return 'property__bookmark-button property__bookmark-button--active button';
    }
    return 'property__bookmark-button button';
  };

  const getHostAvatarWrapperClassName = () => {
    if (host.isPro) {
      return 'property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper';
    }
    return 'property__avatar-wrapper user__avatar-wrapper';
  };

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image: string) => (
                <div className="property__image-wrapper" key={image}>
                  <img className="property__image" src={image} alt="Interior view" />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={getBookmarkButtonClassName()} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${getRatingStarsWidth(rating)}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good: string) => (
                    <li className="property__inside-item" key={good}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={getHostAvatarWrapperClassName()}>
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {host.isPro &&
                    <span className="property__user-status">
                      Pro
                    </span>}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {title}
                  </p>
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">

              </section>
            </div>
          </div>
          <Map
            type={MapType.Property}
            location={offer.city.location}
            points={nearbyPoints}
            currentPoint={currentPoint}
          />
        </section>
        <div className="container">

        </div>
      </main>
    </div>
  );
}

export { Property };
export default connector(Property);
