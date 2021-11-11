import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import Products from "./../Products/Products";

const Explore = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://nameless-retreat-72623.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="container mb-5">
        <div>
          <h2 className="py-5 text-center fw-bold">Here is Our All Products</h2>
          <Row md={4} className="g-4 all-products">
            {products.map((product) => (
              <Products product={product} key={product._id}></Products>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Explore;
