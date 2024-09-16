import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "../../../styles/Header.scss";
import companyLogo from "../../../assets/company-logo.png";
import userLogo from "../../../assets/user-icon.svg";
import shopCart from "../../../assets/shop-cart.svg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../actions/userActions";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const { user, isAuthenticated } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    window.alert("Logged Out Successfully");
    setExpanded(false);
  };

  const count = 1;

  const handleNavClick = () => setExpanded(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header>
      <Navbar expand="lg" className="bg-nav" expanded={expanded}>
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
                  onClick={handleNavClick}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  onClick={handleNavClick}
                >
                  About Us
                </NavLink>
                <NavDropdown title="Products" id="navbarScrollingDropdown">
                  <NavDropdown.Item as={NavLink} to="/products" onClick={handleNavClick}>
                    Products
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/option" onClick={handleNavClick}>
                    Option
                  </NavDropdown.Item>
                </NavDropdown>
                <NavLink
                  to="/contactus"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  onClick={handleNavClick}
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
                    onClick={handleNavClick}
                  >
                    Login/Signup
                  </NavLink>
                )}
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
                    <NavDropdown.Item as={NavLink}
                     to = {user?.type === "reseller" ? "/raccount" : "/account"} 
                     onClick={handleNavClick}>
                      Account
                    </NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/orders" onClick={handleNavClick}>
                      Orders
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      // as={NavLink}
                      // to="/"
                      onClick={handleLogout}
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  ""
                )}

                {/* <NavDropdown
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
                  <NavDropdown.Item as={NavLink} to="/account" onClick={handleNavClick}>
                    Account
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/orders" onClick={handleNavClick}>
                    Orders
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/" onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown> */}

                <NavLink to="/cart" className="shop-link nav-link ShopCart" onClick={handleNavClick}>
                  <img
                    src={shopCart}
                    width="100%"
                    height="100%"
                    className="d-inline-block align-top"
                    alt="Shop cart"
                  />
                  <div className="cart-counter">{count}</div>
                </NavLink>
              </Nav>
              <Navbar.Toggle
                aria-controls="navbarScroll"
                onClick={() => setExpanded(expanded ? false : true)}
                className={expanded ? "" : "collapsed"} 
              >
                <span className="navbar-toggler-icon"></span>
              </Navbar.Toggle>
            </div>
          </div>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
