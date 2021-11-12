import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Products = (props) => {
  const { name, key, img, description, price } = props.product;
  return (
    <Col md={3}>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <span className="fw-bold text-start h3">Prcie : {price}$</span>
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
