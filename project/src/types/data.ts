type UserAuthData = {
  login: string;
  password: string;
};

type User = {
  avatarUrl: string;
  email: string;
  id: number;
  isPro: boolean;
  name: string;
  token: string;
} | null;

type DataUser = {
  'avatar_url': string;
  'email': string;
  'id': number;
  'is_pro': boolean;
  'name': string;
  'token': string;
};

type DataOffer = {
  'bedrooms': number,
  'city': {
    'location': {
      'latitude': number,
      'longitude': number,
      'zoom': number
    },
    'name': string
  },
  'description': string,
  'goods': string[],
  'host': {
    'avatar_url': string,
    'id': number,
    'is_pro': true,
    'name': string
  },
  'id': number,
  'images': string[],
  'is_favorite': false,
  'is_premium': false,
  'location': {
    'latitude': number,
    'longitude': number,
    'zoom': number
  },
  'max_adults': number,
  'preview_image': string,
  'price': number,
  'rating': number,
  'title': string,
  'type': string,
}

type DataReview = {
  'comment': string,
  'date': Date,
  'id': number,
  'rating': number,
  'user': {
    'id': number,
    'name': string,
    'avatar_url': string,
    'is_pro': boolean,
  };
}

export type { User, UserAuthData, DataOffer, DataReview, DataUser };
