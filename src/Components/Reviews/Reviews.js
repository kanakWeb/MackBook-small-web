import React from "react";
import useProduct from "../../hooks/useProduct";
import ReviewProduct from "../ReviewProduct/ReviewProduct";

const Reviews = () => {
  const [products, setProducts] = useProduct([]);
  return (
    <div className="container py-5">
      <h4>This is Review item</h4>

      <div className=" row g-4 py-5">
        {products.map((product) => (
          <ReviewProduct
            key={product.id}
            product={product}
          ></ReviewProduct>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
