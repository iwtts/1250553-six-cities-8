import { Offer } from './types/offer';

const getRatingStarsWidth = (rating: number): number => rating * 20;

const adaptOfferDataToClient = (data: any): Offer => ({
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
  type: data['room'],
});

export { getRatingStarsWidth, adaptOfferDataToClient };
