import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-main">
      <Container>
        <Row>
          <Col md={3}>
            <div>
              <img
                className="text-center"
                src="http://squadrone.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/01/logo-black-footer.png"
              />
              <p className="text-start mt-3 text-black">
                Objectively innovate empowered manufactured products whereas
                parallel platforms. Holisticly predominate extensible testing.
                Objectively innovate empowered manufactured products whereas
                parallel platforms.
              </p>
            </div>
          </Col>
          <Col md={3}>
            <ul className="main-footer-ul">
              <h5 className="text-start fw-bold text-black mb-4">Categories</h5>
              <li> Rent</li>
              <li> BATTERY</li>
              <li> SENSORS</li>
              <li> CINEMATOGRAPHY</li>
              <li> Sport</li>
            </ul>
          </Col>
          <Col md={3}>
            <ul className="main-footer-ul">
              <h5 className="text-start fw-bold text-black mb-4">
                Importnat Links
              </h5>
              <li>Privacy Policy</li>
              <li> Refund Policy</li>
              <li> Disclaimer</li>
              <li> Contact</li>
              <li> Blog</li>
            </ul>
          </Col>
          <Col md={3}>
            <ul className="main-footer-ul">
              <h5 className="text-start fw-bold text-black mb-4">
                Your Account
              </h5>
              <li> </li>
              <li> My Account</li>
              <li> Order History</li>
              <li> Track Order</li>
              <li> My Address</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
