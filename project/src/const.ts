const MIN_REVIEW_LENGTH = 50;

const URL_MARKER_DEFAULT = './img/pin.svg';

const URL_MARKER_CURRENT = './img/pin-active.svg';

const OFFERS_NEARBY_AMOUNT = 3;

const CITIES = {
  Paris: {
    name: 'Paris',
    location: {
      latitude: 48.864716,
      longitude: 2.349014,
      zoom: 10,
    },
  },
  Cologne: {
    name: 'Cologne',
    location: {
      latitude: 50.935173,
      longitude: 6.953101,
      zoom: 10,
    },
  },
  Brussels: {
    name: 'Brussels',
    location: {
      latitude: 50.8503396,
      longitude: 4.3517103,
      zoom: 10,
    },
  },
  Amsterdam: {
    name: 'Amsterdam',
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
  },
  Hamburg: {
    name: 'Hamburg',
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: 10,
    },
  },
  Dusseldorf: {
    name: 'Dusseldorf',
    location: {
      latitude: 51.233334,
      longitude: 6.783333,
      zoom: 10,
    },
  },
};

enum AppRoute {
  Main = '/',
  SignIn  = '/login',
  Favorites = '/favorites',
  Room = '/offer'
}

enum ApiRoute {
  Offers = '/hotels',
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout',
}

enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum CardType {
  Main,
  Property,
}

enum OfferType {
  Apartment = 'Apartment',
  Room = 'Private Room',
  House = 'House',
  Hotel = 'Hotel',
}

enum ActionType {
  SetCity = 'app/set-city',
  SetOffers = 'app/set-offers-by-city',
  ChangeSortType = 'sort/change-sort-type',
  RequireAuth = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  ChangeUser = 'user/change-user',
  RedirectToRoute = 'user/redirect-to-route',
}
enum SortType {
  Popular = 'Popular',
  TopRatedFirst = 'Top rated first',
  PriceIncrease = 'Price: low to high',
  PriceDecrease = 'Price: high to low',
}

export {
  MIN_REVIEW_LENGTH,
  URL_MARKER_CURRENT,
  URL_MARKER_DEFAULT,
  OFFERS_NEARBY_AMOUNT,
  CITIES,
  AppRoute,
  ApiRoute,
  AuthStatus,
  CardType,
  OfferType,
  ActionType,
  SortType
};
