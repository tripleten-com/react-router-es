import {useParams} from 'react-router-dom';
import type {ReviewData} from '../ReviewInterface.ts';
import './Review.css';

interface ReviewProps {
  reviews: ReviewData[];
}

function Review({ reviews }: ReviewProps): React.JSX.Element {
  const params = useParams<{ reviewId: string }>();

  const id = params.reviewId ? parseInt(params.reviewId, 10) - 1 : 0;

  return (
    <div className='review'>
      {reviews && reviews.length > 0 && (
        <div className="review__item">
          <h3>{reviews[id]?.title}</h3>
          <p>{reviews[id]?.text}</p>
          <p className="review__rating">Calificación final:{reviews[id]?.rating}/5</p>
        </div>
      )}
    </div>
  );
}

export default Review;
