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
  apartment = 'Apartment',
  room = 'Private Room',
  house = 'House',
  hotel = 'Hotel',
}

export { AppRoute, AuthStatus, OfferType };
