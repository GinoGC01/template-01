// Componente para una sola estrella
import "./starTating.css";
import { Star } from "../../Icons/Star";

export const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} filled={star <= rating} />
      ))}
    </div>
  );
};
