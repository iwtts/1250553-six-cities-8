import { Review } from '../types/review';

const reviews: Review[] = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.',
    date: '2019-05-08T14:13:56.569Z',
    id: 10,
    rating: 4,
    user: {
      avatarUrl: './img/avatar-max.jpg',
      id: 12,
      isPro: false,
      name: 'Max',
    },
  },
  {
    comment: 'Mystery, however paradoxical it may seem, is free. Revealing stable archetypes on the example of artistic creation, it can be said that art gracefully begins constructive postmodernism.',
    date: '2019-01-08T11:30:15.569Z',
    id: 11,
    rating: 3,
    user: {
      avatarUrl: './img/avatar-angelina.jpg',
      id: 13,
      isPro: true,
      name: 'Angelina',
    },
  },
];

export { reviews };
