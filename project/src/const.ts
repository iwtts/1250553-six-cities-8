import { Icon } from 'leaflet';

const MIN_REVIEW_LENGTH = 50;

const MAX_REVIEW_LENGTH = 300;

const ITINIAL_RATING = '0';

const URL_MARKER_DEFAULT = './img/pin.svg';

const URL_MARKER_CURRENT = './img/pin-active.svg';

const OFFERS_NEARBY_AMOUNT = 3;

const REVIEWS_TO_SHOW_AMOUNT = 10;

const OFFER_PAGE_PHOTOS_TO_SHOW_AMOUNT = 6;

const AUTH_FAIL_MESSAGE = 'You are not logged in';

const ERROR_MESSAGE = 'An error occured';

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

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [14, 39],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [14, 39],
});

enum AppRoute {
  Main = '/',
  SignIn  = '/login',
  Favorites = '/favorites',
  Room = '/offer'
}

enum ApiRoute {
  Offers = '/hotels',
  Reviews = '/comments',
  Hotels = '/hotels',
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout',
}

enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum FavoriteStatus {
  True = '1',
  False = '0',
}

enum CardType {
  Main,
  Property,
}

enum HeaderType {
  Default,
  Login,
}

enum MapType {
  Main,
  Property,
}

enum ActionType {
  SetCity = 'app/set-city',
  SetOffer = 'app/set-offer',
  SetOffers = 'app/set-offers-by-city',
  SetReviews = 'app/set-reviews',
  SetNearbyOffers = 'app/set-offers-nearby',
  SetFavoriteOffers = 'app/set-favorite-offers',
  ChangeSortType = 'sort/change-sort-type',
  RequireAuth = 'user/requireAuthorization',
  SetUser = 'user/set-user',
  RequireLogout = 'user/requireLogout',
  RedirectToRoute = 'user/redirect-to-route',
  PostReview = 'user/post-review',
}

enum SortType {
  Popular = 'Popular',
  TopRatedFirst = 'Top rated first',
  PriceIncrease = 'Price: low to high',
  PriceDecrease = 'Price: high to low',
}

enum NameSpace {
  Offers = 'OFFERS',
  User = 'USER',
}

export {
  MIN_REVIEW_LENGTH,
  MAX_REVIEW_LENGTH,
  ITINIAL_RATING,
  URL_MARKER_CURRENT,
  URL_MARKER_DEFAULT,
  defaultCustomIcon,
  currentCustomIcon,
  OFFERS_NEARBY_AMOUNT,
  REVIEWS_TO_SHOW_AMOUNT,
  OFFER_PAGE_PHOTOS_TO_SHOW_AMOUNT,
  AUTH_FAIL_MESSAGE,
  ERROR_MESSAGE,
  CITIES,
  AppRoute,
  ApiRoute,
  AuthStatus,
  FavoriteStatus,
  CardType,
  HeaderType,
  MapType,
  ActionType,
  SortType,
  NameSpace
};
