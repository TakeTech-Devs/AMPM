import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
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
          <Navbar.Brand href="/">
            <img
              src={companyLogo}
              width="110"
              height="110"
              className="d-inline-block align-top"
              alt="Company Logo"
            />
          </Navbar.Brand>
          <div className="nav-right">
           
            <Nav
              className="ml-auto icons "
            >
              <Nav.Link className="shop-link" href="#shopcart">
                <img
                  src={shopCart}
                  width="32"
                  height="32"
                  className="d-inline-block align-top"
                  alt="Shop cart"
                />
                <div className="cart-counter">{count}</div>
              </Nav.Link>
              <Nav.Link className="user-logo" href="#userLogo">
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
                  <NavDropdown.Item href="#account">Account</NavDropdown.Item>
                  <NavDropdown.Item href="#orders">Orders</NavDropdown.Item>
                  <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav.Link>
            </Nav>

            
            <Navbar.Toggle aria-controls="navbarScroll" />

            
            
          </div>
          <Navbar.Collapse id="navbarScroll">
              <Nav className="my-2 my-lg-0 all-navs">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About Us</Nav.Link>
                <NavDropdown title="Products" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#industrial">
                    Industrial
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#option">Option</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#contact">Contact Us</Nav.Link>
                <Nav.Link className="login" href="/login">
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
