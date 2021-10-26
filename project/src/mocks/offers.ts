import { Offer } from '../types/offer';
import { OfferType } from '../const';

const offers: Offer[] = [
  {
    id: 1,
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: './img/avatar-angelina.jpg',
      id: 5,
      isPro: true,
      name: 'Angelina',
    },
    images: ['./img/apartment-01.jpg', './img/apartment-02.jpg'],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: './img/apartment-small-04.jpg',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: OfferType.Apartment,
  },
  {
    id: 2,
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'The main highway runs from north to south from Shkoder through Durres to Vlora, after turning the kandym enlightens the thermal spring.',
    goods: ['Heating', 'Cable TV', 'Washing machine', 'Coffee machine'],
    host: {
      avatarUrl: './img/avatar-angelina.jpg',
      id: 5,
      isPro: true,
      name: 'Angelina',
    },
    images: ['./img/apartment-03.jpg', './img/apartment-01.jpg', './img/apartment-02.jpg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: './img/apartment-small-03.jpg',
    price: 100,
    rating: 4.4,
    title: 'The predicate calculus generates and provides a typical dualism',
    type: OfferType.Room,
  },
  {
    id: 3,
    bedrooms: 5,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A priori, hedonism infers genius by denying the obvious. Common sense, therefore, comprehends the tense gravitational paradox.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: './img/avatar-max.jpg',
      id: 6,
      isPro: false,
      name: 'Max',
    },
    images: ['./img/apartment-02.jpg', './img/apartment-03.jpg'],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8,
    },
    maxAdults: 9,
    previewImage: './img/apartment-small-04.jpg',
    price: 190,
    rating: 4.9,
    title: 'The law of the outside world is not so obvious',
    type: OfferType.House,
  },
  {
    id: 4,
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'The sign, therefore, inductively comprehends typical structuralism. The predicate calculus discredits conflict philosophically.',
    goods: ['Heating', 'Cable TV', 'Coffee machine'],
    host: {
      avatarUrl: './img/avatar-max.jpg',
      id: 6,
      isPro: false,
      name: 'Max',
    },
    images: ['./img/apartment-01.jpg', './img/apartment-03.jpg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: './img/apartment-small-03.jpg',
    price: 130,
    rating: 4.1,
    title: 'Art meaningfully emphasizes the deductive method',
    type: OfferType.Hotel,
  },
];

export { offers };
