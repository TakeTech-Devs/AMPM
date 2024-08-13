import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
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
          <Navbar.Brand as={NavLink} to="/">
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
              <NavLink to="/shopcart" className="shop-link nav-link">
                <img
                  src={shopCart}
                  width="32"
                  height="32"
                  className="d-inline-block align-top"
                  alt="Shop cart"
                />
                <div className="cart-counter">{count}</div>
              </NavLink>
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
                className="user-logo"
              >
                <NavDropdown.Item as={NavLink} to="/account">
                  Account
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/orders">
                  Orders
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/logout">
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Navbar.Toggle aria-controls="navbarScroll" />
          </div>

          <Navbar.Collapse id="navbarScroll">
            <Nav className="my-2 my-lg-0 all-navs">
              <NavLink
                exact
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                About Us
              </NavLink>
              <NavDropdown title="Products" id="navbarScrollingDropdown">
                <NavDropdown.Item as={NavLink} to="/products">
                  Products
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/option">
                  Option
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink
                to="/contactus"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Contact Us
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link login"
                }
              >
                Login/Signup
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
