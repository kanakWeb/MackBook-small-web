import React from "react";

const Reviewhome = (props) => {
  const {picture,reName,Rateing,Review,} = props.review;
  return (
    <div className="col-xl-4 col-sm-6 mb-5">
            <div className="bg-white rounded shadow-sm py-5 px-4 w-100"><span className="text-center small ">
            <img src={picture} alt="" width="100" className="img-fluid rounded-circle mx-auto d-block text-centar mb-3 img-thumbnail shadow-sm"/>
            <h5 className="mb-2">{reName}</h5><h5 className="small text-uppercase text-muted">{Rateing}</h5>
            <p className="small text-uppercase text-muted py-2">{Review}</p>
            </span>
               
                
            </div>
        </div>
  );
};

export default Reviewhome;
