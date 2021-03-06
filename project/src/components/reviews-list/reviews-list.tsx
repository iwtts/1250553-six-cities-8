import { Review } from '../../types/review';

import ReviewItem from '../review/review';

import { REVIEWS_TO_SHOW_AMOUNT } from '../../const';

type ReviewListProps = {
  reviews: Review[];
}

function ReviewsList({reviews}: ReviewListProps): JSX.Element {
  const sortedReviews = reviews.slice().sort((a, b) => Date.parse(b.date.toString()) - Date.parse(a.date.toString()));

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {sortedReviews
          .slice(0, REVIEWS_TO_SHOW_AMOUNT)
          .map((review) =>
            (
              <ReviewItem
                review={review}
                key={review.id}
              />
            ),
          )}
      </ul>
    </>
  );
}

export default ReviewsList;

