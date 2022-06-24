import { Rating } from "react-simple-star-rating";

export default function ModRating({ ratingValue, setRatingValue }) {
  const handleRating = (rate) => {
    setRatingValue((prev) => ({ ...prev, ratingValue: rate }));
  };

  return (
    <Rating
      transition
      onClick={handleRating}
      ratingValue={ratingValue}
      size={20}
      fillColor="#f8df72"
    />
  );
}
