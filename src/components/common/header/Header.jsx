import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../styles/Header.scss";
import companyLogo from "../../../assets/company-logo.png";
import userLogo from "../../../assets/user-icon.svg";
import shopCart from "../../../assets/shop-cart.svg";

function Header() {
  const count = 5;

  return (

    <header>
      <Navbar expand="lg" className="bg-nav">
        <Container fluid="lg">
          <Navbar.Brand as={Link} to="/">
            <img
              src={companyLogo}
              width="110"
              height="110"
              className="d-inline-block align-top"
              alt="Company Logo"
            />
          </Navbar.Brand>

          <div className="nav-right">
            <Nav className="ml-auto icons">
              <Nav.Link className="shop-link" as={Link} to="/shopcart">
                <img
                  src={shopCart}
                  width="32"
                  height="32"
                  className="d-inline-block align-top"
                  alt="Shop cart"
                />
                <div className="cart-counter">{count}</div>
              </Nav.Link>
              <Nav.Link className="user-logo">
                <NavDropdown
                  title={
                    <img
                      src={userLogo}
                      width="32"
                      height="32"
                      className="d-inline-block align-top"
                      alt="User logo"
                    />
                  }
                  id="afterEffect"
                >
                  <NavDropdown.Item as={Link} to="/account">Account</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/orders">Orders</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/logout">Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav.Link>
            </Nav>

            <Navbar.Toggle aria-controls="navbarScroll" />
          </div>

          <Navbar.Collapse id="navbarScroll">
            <Nav className="my-2 my-lg-0 all-navs">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>
              <NavDropdown title="Products" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/products">Industrial</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#option">Option</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="#contact">Contact Us</Nav.Link>
              <Nav.Link className="login" as={Link} to="/login">
                Login/Signup
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
