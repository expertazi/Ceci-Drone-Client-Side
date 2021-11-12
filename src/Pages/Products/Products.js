import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const Products = (props) => {
  const { name, key, img, description, price, rating } = props.product;
  return (
    <Col md={3}>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <div className=" d-flex justify-content-between align-items-center">
            <span>
              <Rating
                initialRating={rating}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                readonly
              />
            </span>
            <span className="fw-bold text-start h3">Prcie : {price}$</span>
          </div>

          <Card.Title className="mt-2">{name.slice(0, 25)}</Card.Title>
          <Card.Text>{description.slice(0, 94)}</Card.Text>
          <div className=" d-flex justify-content-between align-items-center">
            <Link to={`/purchase/${key}`}>
              <Button className="btn-global-color " variant="primary">
                Purchase Now
              </Button>
            </Link>
            <Link to={`/review`}>
              <Button className="btn-global-color " variant="primary">
                Add A review
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Products;
