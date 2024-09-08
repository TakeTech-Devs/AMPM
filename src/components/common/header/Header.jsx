import React, { useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import "../../../styles/Header.scss";
import companyLogo from "../../../assets/company-logo.png";
import userLogo from "../../../assets/user-icon.svg";
import shopCart from "../../../assets/shop-cart.svg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../actions/userActions";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
    window.alert("Logot Successfully");
    navigate("/about");
  };

  const count = 1;

  return (
    <header>
      <Navbar expand="lg" className="bg-nav">
        <Container fluid="lg">
          <div className="nav-wrapper">
            <Navbar.Brand as={NavLink} to="/">
              <img
                src={companyLogo}
                width="110"
                height="110"
                className="d-inline-block align-top"
                alt="Company Logo"
              />
            </Navbar.Brand>
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
                {isAuthenticated ? (
                  ""
                ) : (
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link login"
                    }
                  >
                    Login/Signup
                  </NavLink>
                )}
                {/* <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link login"
                }
              >
                Login/Signup
              </NavLink> */}
              </Nav>
            </Navbar.Collapse>
            <div className="nav-right">
              <Nav className="ml-auto icons">
                {isAuthenticated ? (
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
                    <NavDropdown.Item
                      as={NavLink}
                      to="/"
                      onClick={handleLogout}
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  ""
                )}

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
                <NavDropdown.Item as={NavLink} to="/" onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>

                <NavLink to="/cart" className="shop-link nav-link">
                  <img
                    src={shopCart}
                    width="32"
                    height="32"
                    className="d-inline-block align-top"
                    alt="Shop cart"
                  />
                  <div className="cart-counter">{count}</div>
                </NavLink>
              </Nav>
              <Navbar.Toggle aria-controls="navbarScroll" />
            </div>
          </div>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
