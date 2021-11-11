import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Slider.css";

const Slider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block slider-img"
            src="http://squadrone.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/12/hero_landing.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h4 className="fw-bold text-start">SquaDrone WordPress Theme</h4>
            <h1 className="fw-bold text-start"> Capturing Anthing AllTime</h1>
            <Link to="/explore">
              <p className=" text-start slider-text-btn">Explore More</p>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
