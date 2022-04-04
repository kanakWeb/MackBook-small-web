import React from "react";
import { Link } from "react-router-dom";
import useReview from "../../hooks/useReview";
import Reviewhome from "../Reviewhome/Reviewhome";

const Home = () => {
  const [reviews] = useReview([]);

  return (
    <div className="container">
      <div className="row  py-5">
        <div className="col-lg-7 col-sm-12">
          <h2 className="py-5">
            12-inch MacBook has been discontinued
          </h2>
          <p className="fs-5 text-wrap">
            Apple to debut a new version of the 12in MacBook that runs
            on an Apple-made ARM processor. Last year, Apple
            discontinued the 12-inch MacBook due to its lack of ports,
            the Butterfly keyboard issues, and its high base price of
            $1,299.
          </p>
          <button className="btn btn-secondary">Explore Buy</button>
        </div>
        <div className="col-lg-5 col-sm-12">
          <img
            width="500px"
            src="https://www.bdstall.com/asset/product-image/giant_57817.jpg"
            alt=""
          />
        </div>
      </div>
      <h2 className="text-center">Top Reviews</h2>
      <div className=" row g-4 py-5">
        {reviews.slice(0, 3).map((review) => (
          <Reviewhome key={review.id} product={review}></Reviewhome>
        ))}
      </div>
      <div className="py-5">
        <Link className="link " to="/Reviews">
          <p className="text-center">
            <button className="btn  btn-primary">
              See All Reviews
            </button>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
