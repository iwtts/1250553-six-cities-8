import { DataOffer, DataReview } from './types/data';
import { Offer } from './types/offer';
import { Review } from './types/review';

const getRatingStarsWidth = (rating: number): number => rating * 20;

const adaptOfferDataToClient = (data: DataOffer): Offer => ({
  bedrooms: data['bedrooms'],
  city: {
    name: data['city']['name'],
    location: {
      latitude: data['city']['location']['latitude'],
      longitude: data['city']['location']['longitude'],
      zoom: data['city']['location']['zoom'],
    },
  },
  description: data['description'],
  goods: data['goods'],
  host: {
    id: data['host']['id'],
    name: data['host']['name'],
    isPro: data['host']['is_pro'],
    avatarUrl: data['host']['avatar_url'],
  },
  id: data['id'],
  images: data['images'],
  isFavorite: data['is_favorite'],
  isPremium: data['is_premium'],
  location: {
    latitude: data['location']['latitude'],
    longitude: data['location']['longitude'],
    zoom: data['location']['zoom'],
  },
  maxAdults: data['max_adults'],
  previewImage: data['preview_image'],
  price: data['price'],
  rating: data['rating'],
  title: data['title'],
  type: data['type'],
});

const adaptReviewDataToClient = (data: DataReview): Review => ({
  comment: data['comment'],
  date: data['date'],
  id: data['id'],
  rating: data['rating'],
  user: {
    avatarUrl: data['user']['avatar_url'],
    id: data['user']['id'],
    isPro: data['user']['is_pro'],
    name: data['user']['name'],
  },
});

export { getRatingStarsWidth, adaptOfferDataToClient, adaptReviewDataToClient };
