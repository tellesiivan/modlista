import { Rating } from "react-simple-star-rating";

export default function ModRating({ ratingValue, setRatingValue }) {
  const handleRating = (rate) => {
    setRatingValue("ratingValue", rate);
  };

  return (
    <Rating
      transition
      onClick={handleRating}
      ratingValue={ratingValue}
      size={20}
      fillColor="#88f1b6"
    />
  );
}
