import { datatype, internet, lorem } from 'faker';
import { Review } from '../types/review';

const getMockReview = (): Review => ({
  comment: lorem.paragraph(),
  date: datatype.datetime(),
  id: datatype.number(),
  rating: datatype.float({precision: 1, max: 5}),
  user: {
    avatarUrl: internet.avatar(),
    id: datatype.number(),
    isPro: datatype.boolean(),
    name: internet.userName(),
  },
});

const getMockReviews = (): Review[] => new Array(datatype.number(10)).fill(null).map(() => getMockReview());

export { getMockReview, getMockReviews };
