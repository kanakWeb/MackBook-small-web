import React from "react";

const Product = (props) => {
  const {picture, name, price } = props.product;
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="card card-sizing ">
        <img width="354px" height='150px' src={picture} alt="" />
        <div className="card-body">
           
          <h2 className="card-title mt-5">{name}</h2>
          <h5 className="mt-4">Price:$ {price}</h5>
        </div>
      </div>
    </div>
  );
};

export default Product;
