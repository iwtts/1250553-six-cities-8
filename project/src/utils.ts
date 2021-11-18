import { ReactText } from 'react';
import { toast } from 'react-toastify';

import { User, DataOffer, DataReview, DataUser } from './types/data';
import { Offer } from './types/offer';
import { Review } from './types/review';

const getRatingStarsWidth = (rating: number): number => Math.round(rating) * 20;

const capitalizeFirstLetter = (string: string): string => string.charAt(0).toUpperCase() + string.slice(1);

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
  type: capitalizeFirstLetter(data['type']),
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


const adaptAuthDataToClient = (data: DataUser): User => ({
  avatarUrl: data['avatar_url'],
  email: data['email'],
  id: data['id'],
  isPro: data['is_pro'],
  name: data['name'],
  token: data['token'],
});

const updateOffers = (offers: Offer[], updatedOffer: Offer): Offer[] => {
  const id = offers.findIndex((offer) => offer.id === updatedOffer.id);

  if (id === -1) {
    return offers;
  }

  return [
    ...offers.slice(0, id),
    updatedOffer,
    ...offers.slice(id + 1),
  ];
};

const throwError = (message: string): ReactText => toast.error(message, {
  position: 'bottom-left',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});

export { getRatingStarsWidth, adaptOfferDataToClient, adaptReviewDataToClient, adaptAuthDataToClient, updateOffers, throwError };
