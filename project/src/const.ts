const MIN_REVIEW_LENGTH = 50;

const URL_MARKER_DEFAULT = './img/pin.svg';

const URL_MARKER_CURRENT = './img/pin-active.svg';

const NEAR_PLACES_AMOUNT = 3;

enum AppRoute {
  Main = '/',
  SignIn  = '/login',
  Favorites = '/favorites',
  Room = '/offer'
}

enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum OfferType {
  Apartment = 'Apartment',
  Room = 'Private Room',
  House = 'House',
  Hotel = 'Hotel',
}

export { AppRoute, AuthStatus, OfferType, MIN_REVIEW_LENGTH, URL_MARKER_CURRENT, URL_MARKER_DEFAULT, NEAR_PLACES_AMOUNT };
