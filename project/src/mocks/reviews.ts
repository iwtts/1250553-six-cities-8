import { datatype, internet, lorem } from 'faker';
import { DataReview } from '../types/data';
import { Review } from '../types/review';

const getMockReview = (): Review => ({
  comment: lorem.paragraph(),
  date: datatype.datetime().toISOString(),
  id: datatype.number(),
  rating: datatype.float({precision: 1, max: 5}),
  user: {
    avatarUrl: internet.avatar(),
    id: datatype.number(),
    isPro: datatype.boolean(),
    name: internet.userName(),
  },
});

const getMockDataReview = (): DataReview => ({
  'comment': lorem.paragraph(),
  'date': datatype.datetime().toISOString(),
  'id': datatype.number(),
  'rating': datatype.float({precision: 1, max: 5}),
  'user': {
    'avatar_url': internet.avatar(),
    'id': datatype.number(),
    'is_pro': datatype.boolean(),
    'name': internet.userName(),
  },
});

const getMockReviews = (): Review[] => new Array(datatype.number(10)).fill(null).map(() => getMockReview());
const getMockDataReviews = (): DataReview[] => new Array(datatype.number(10)).fill(null).map(() => getMockDataReview());

export { getMockReview, getMockReviews, getMockDataReviews };
