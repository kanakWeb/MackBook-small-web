import React from "react";
import useReview from "../../hooks/useReview";
import ReviewAll from "../ReviewAll/ReviewAll";

const Reviews = () => {
  const [reviews] = useReview([]);
  return (
    <div className="container py-5">
      <h4 className="text-center fw-bold">See All The Reviews</h4>

      <div className=" row g-4 py-5">
        {reviews.map((review) => (
          <ReviewAll
            key={review.id}
            product={review}
          ></ReviewAll>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
