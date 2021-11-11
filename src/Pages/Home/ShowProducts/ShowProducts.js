import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Products from "../../Products/Products";

const ShowProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://nameless-retreat-72623.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="container mb-5">
        <div id="eventList">
          <h2 className="py-5 text-center fw-bold">
            Here is Our All Upcoming products
          </h2>
          <Row md={4} className="g-4 all-products">
            {products.slice(0, 4).map((product) => (
              <Products product={product} key={product.key}></Products>
            ))}
          </Row>
        </div>
        <Link className="my-5" to="/explore">
          <button className="btn btn-warning my-5">Explore More</button>
        </Link>
      </div>
    </div>
  );
};

export default ShowProducts;
