import { Review } from '../../types/review';

import ReviewItem from '../review/review';

type ReviewListProps = {
  reviews: Review[];
}

function ReviewsList({reviews}: ReviewListProps): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) =>
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

