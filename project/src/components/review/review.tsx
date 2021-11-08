import { Review } from '../../types/review';
import { getRatingStarsWidth } from '../../utils';

type ReviewProps = {
  review: Review;
}

function ReviewItem(props: ReviewProps): JSX.Element {
  const {user, rating, comment, date} = props.review;
  const reviewDate= new Date (date);
  const reviewDateString = reviewDate.toDateString();

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${getRatingStarsWidth(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={reviewDateString}>{reviewDateString}</time>
      </div>
    </li>
  );
}

export default ReviewItem;
