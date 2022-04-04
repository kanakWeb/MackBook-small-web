import React from "react";
import { Link } from "react-router-dom";
import useProduct from "../../hooks/useProduct";
import Product from "../Product/Product";

const Home = () => {
  const [products, setProducts] = useProduct([]);

  return (
    <div className="container">
      <div className="row  py-5">
        <div className="col-lg-7 col-sm-12">
          <h2>Heart healthy fruits that will keep your high cholesterol at bay!</h2>
          <p className="fs-5 text-wrap">
          There are many fruits that keep your cholesterol level at bay! Along with adding deliciousness and nutritional value to your diet, there are fruits that add soluble fiber and minerals that are good in balancing the high cholesterol level in the body.It is being said that fruits give you instant energy and boost your body. Several fruits are good to balance the high cholesterol levels of the body. Fruits with a good balance of nutrition and soluble fiber prevent you from heart diseases such as heart stroke, artery blockage, heart attack, and other heart problems. Here is a list of fruits that you can add to your everyday meal for a good heart-health.
          </p>
        </div>
        <div className="col-lg-5 col-sm-12">
          <img
            width="500px"
            src="https://st.depositphotos.com/1486923/1948/i/600/depositphotos_19486333-stock-photo-fruit-background.jpg"
            alt=""
          />
        </div>
      </div>

      <div className=" row g-4 py-5">
        {products.slice(0, 3).map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
      <div className="py-5">
        <Link className="link text-center" to="/Reviews">
        See All Reviews
        </Link>
      </div>
    </div>
  );
};

export default Home;
