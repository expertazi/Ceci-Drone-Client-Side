import React from "react";
import { Container, Nav, Navbar, Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import { HashLink } from "react-router-hash-link";
import useAuth from "./../../contexts/useAuth";

const Header = () => {
  const { user, admin, logOut } = useAuth();

  return (
    <div className=" main-menu sticky-top">
      <Navbar sticky="top" bg="dark" expand="lg">
        <Container>
          <Navbar.Brand to="/home">
            <img
              src="https://squadrone.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/12/logo-white.png"
              width="100%"
              height="50"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              <Link to="/home">Home</Link>
              <Link to="/explore">Explore</Link>
              <Link to="/contactUs">Contact Us</Link>

              {user?.email ? (
                <div className="ms-auto d-flex align-items-center">
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                      Dashboard
                    </Dropdown.Toggle>

                    {admin ? (
                      <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/manageAllPorducts">
                          Manage All Orders
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="/addProduct">
                          Add Product
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="/makeAdmin">
                          Make Admin
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="/manageProducts">
                          Manage Products
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    ) : (
                      <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/pay">
                          Pay
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="/myOrder">
                          My Order
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="/review">
                          Review
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    )}
                  </Dropdown>

                  <Button onClick={logOut} variant="dark">
                    Logout
                  </Button>
                </div>
              ) : (
                <Link to="/login">Login</Link>
              )}
              <Navbar.Text> Signned Email is : {user?.email} </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
