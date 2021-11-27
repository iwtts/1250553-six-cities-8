import { commerce, datatype, internet } from 'faker';
import { DataOffer } from '../types/data';
import { Offer } from '../types/offer';
import { getMockCityName, getMockGoods, getMockImages, getMockLocation, getMockPreviewImage, getMockType } from './utils';

const getMockOffer = (): Offer => ({
  id: datatype.number(),
  bedrooms: datatype.number(10),
  city: {
    location: getMockLocation(10),
    name: getMockCityName(),
  },
  description: commerce.productDescription(),
  goods: getMockGoods(),
  host: {
    avatarUrl: internet.avatar(),
    id: datatype.number(),
    isPro: datatype.boolean(),
    name: internet.userName(),
  },
  images: getMockImages(),
  isFavorite: datatype.boolean(),
  isPremium: datatype.boolean(),
  location: getMockLocation(8),
  maxAdults: datatype.number(10),
  previewImage: getMockPreviewImage(),
  price: datatype.number(1000),
  rating: datatype.float({precision: 1, max: 5}),
  title: commerce.productName(),
  type: getMockType(),
});

const getMockDataOffer = (): DataOffer => ({
  'id': datatype.number(),
  'bedrooms': datatype.number(10),
  'city': {
    'location': getMockLocation(10),
    'name': getMockCityName(),
  },
  'description': commerce.productDescription(),
  'goods': getMockGoods(),
  'host': {
    'avatar_url': internet.avatar(),
    'id': datatype.number(),
    'is_pro': datatype.boolean(),
    'name': internet.userName(),
  },
  'images': getMockImages(),
  'is_favorite': datatype.boolean(),
  'is_premium': datatype.boolean(),
  'location': getMockLocation(8),
  'max_adults': datatype.number(10),
  'preview_image': getMockPreviewImage(),
  'price': datatype.number(1000),
  'rating': datatype.float({precision: 1, max: 5}),
  'title': commerce.productName(),
  'type': getMockType(),
});

const getMockOffers = (): Offer[] => new Array(15).fill(null).map(() => getMockOffer());
const getMockDataOffers = (): DataOffer[] => new Array(datatype.number(15)).fill(null).map(() => getMockDataOffer());

export { getMockOffer, getMockOffers, getMockDataOffer, getMockDataOffers };
