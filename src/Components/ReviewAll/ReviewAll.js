import React from "react";

const ReviewProduct = (props) => {
  const {picture,reName,Rateing,Review, name,} = props.product;
  return (
    <div className="col-xl-4 col-sm-6 mb-5">
    <div className="bg-white rounded shadow-sm py-5 px-4 w-100"><p className="text-center">
    <img src={picture} alt="" width="100" className="img-fluid rounded-circle text-centar mb-3 img-thumbnail shadow-sm"/>
    <h5 className="mb-0">{reName}</h5><span className="small text-uppercase text-muted">{Rateing}</span>
    <p className="small text-uppercase text-muted py-2">{Review}</p>
    </p>
       
        
    </div>
</div>
  );
};
export default ReviewProduct;
