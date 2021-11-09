import { useState, ChangeEvent, FormEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';

// import { State } from '../../types/state';
import { ThunkAppDispatch } from '../../types/action';
import { Comment } from '../../types/review';

import { postReview } from '../../store/api-actions';

import { MIN_REVIEW_LENGTH } from '../../const';

type ReviewFormProps = {
  offerId: string,
}

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onCommentPost(review: Comment, offerId: string) {
    dispatch(postReview(review, offerId));
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & ReviewFormProps;

function ReviewForm({offerId, onCommentPost}: ConnectedComponentProps): JSX.Element {
  const [commentMessage, setComment] = useState('');
  const [rating, setRating] = useState<string>('0');

  const isInvalid = Boolean(rating === '0' || commentMessage.length < MIN_REVIEW_LENGTH);

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(evt.target.value);
  };

  const handleFormSubmit = (evt: FormEvent): void => {
    evt.preventDefault();
    onCommentPost({comment: commentMessage, rating: rating}, offerId);
    setComment('');
    setRating('0');
  };

  return (
    <form className="reviews__form form" onSubmit={handleFormSubmit} method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" onChange={ handleRatingChange } />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" onChange={ handleRatingChange } />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" onChange={ handleRatingChange } />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" onChange={ handleRatingChange } />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" onChange={ handleRatingChange } />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={commentMessage} onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setComment(event.target.value)}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{MIN_REVIEW_LENGTH} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isInvalid}>Submit</button>
      </div>
    </form>
  );
}

export { ReviewForm };
export default connector(ReviewForm);
