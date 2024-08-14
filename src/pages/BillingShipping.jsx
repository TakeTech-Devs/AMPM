import React from "react";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import "../styles/BillingShipping.scss";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
function BillingShipping() {
  const count = 3;
  const amount = 2;
  return (
    <>
      <section className="billing-mt">
        <Container>
          <div className="navigation billing-nav">
            <Nav.Link className="" href="/">
              <h3>
                Home
                <span>/</span>
              </h3>
            </Nav.Link>
            <Nav className="me-auto align-items-center">
              <Nav.Link className="signup " href="/contactus">
                Cart
              </Nav.Link>
            </Nav>
          </div>
        </Container>
      </section>
      <section className="bg-color order-lifecycle">
        <Container>
          <div className="order-wrapper">
            <div className="first-orders">
              <div className="icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M4.375 4.47416V3.90833C4.375 2.59583 5.43083 1.30666 6.74333 1.18416C8.30667 1.0325 9.625 2.26333 9.625 3.7975V4.6025"
                    stroke="white"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.24917 12.8333H8.74917C11.0942 12.8333 11.5142 11.8942 11.6367 10.7508L12.0742 7.25083C12.2317 5.8275 11.8233 4.66666 9.3325 4.66666H4.66583C2.175 4.66666 1.76667 5.8275 1.92417 7.25083L2.36167 10.7508C2.48417 11.8942 2.90417 12.8333 5.24917 12.8333Z"
                    stroke="white"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.03846 7H9.0437"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.95448 7H4.95972"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p>Shopping Cart</p>
            </div>
            <div className="line"></div>
            <div className="sec-orders">
              <div className="icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M12.8327 7V9.91667C12.8327 11.6667 11.666 12.8333 9.91602 12.8333H4.08268C2.33268 12.8333 1.16602 11.6667 1.16602 9.91667V7C1.16602 5.41334 2.12268 4.305 3.61018 4.11833C3.76185 4.095 3.91935 4.08334 4.08268 4.08334H9.91602C10.0677 4.08334 10.2135 4.08916 10.3535 4.1125C11.8585 4.2875 12.8327 5.40167 12.8327 7Z"
                    stroke="#05422C"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.3547 4.1125C10.2147 4.08916 10.0688 4.08334 9.91716 4.08334H4.08383C3.92049 4.08334 3.76299 4.095 3.61133 4.11834C3.69299 3.955 3.80966 3.80334 3.94966 3.66334L5.84549 1.76166C6.64466 0.968331 7.93966 0.968331 8.73883 1.76166L9.75966 2.79418C10.133 3.16168 10.3313 3.62833 10.3547 4.1125Z"
                    stroke="#05422C"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.8327 7.29166H11.0827C10.441 7.29166 9.91602 7.81666 9.91602 8.45833C9.91602 9.1 10.441 9.625 11.0827 9.625H12.8327"
                    stroke="#05422C"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p>Checkout</p>
            </div>
            <div className="line"></div>
            <div className="third-orders">
              <div className="icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M11.0315 8.57062C11.0315 9.32312 11.6498 9.93562 12.4023 9.93562C12.4023 12.1231 11.854 12.6715 9.66649 12.6715H4.19482C2.00732 12.6715 1.45898 12.1231 1.45898 9.93562V9.66729C2.21148 9.66729 2.82982 9.04896 2.82982 8.29646C2.82982 7.54396 2.21148 6.92562 1.45898 6.92562V6.65729C1.46482 4.46979 2.00732 3.92146 4.19482 3.92146H9.66065C11.8482 3.92146 12.3965 4.46979 12.3965 6.65729V7.20562C11.644 7.20562 11.0315 7.81229 11.0315 8.57062Z"
                    stroke="#05422C"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.4568 3.92146H4.1543L5.86346 2.21229C7.25763 0.818122 7.95763 0.818122 9.3518 2.21229L9.7018 2.56229C9.3343 2.92979 9.2468 3.47229 9.4568 3.92146Z"
                    stroke="#05422C"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.76172 3.92155L5.76172 12.6715"
                    stroke="#05422C"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-dasharray="5 5"
                  />
                </svg>
              </div>
              <p>Order Complete</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="sec-gap all-items-sec">
        <Container>
          <Row>
            <Col>
              <div className="left-bill">
                <div className="cart-heading">
                  <h3>Your Cart</h3>
                  <p>
                    {"("}
                    {count}
                    {")"}
                  </p>
                </div>
                <div className="add-to-cart-items">
                  <div className="items">
                    <div className="items-details">
                      <div className="img-div">
                        <img
                          src={p1}
                          alt="product 1"
                          width="100%"
                          height="100%"
                        />
                      </div>
                      <div className="items-name">
                        <p>1x Khalifa Kush</p>
                        <p>
                          {"("}AAAA{")"}
                        </p>
                      </div>
                    </div>
                    <div className="count-price-wrapper">
                      <div className="counter">
                        <Button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M4 8H12"
                              stroke="#060709"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </Button>
                        <div className="amount">
                          <p>{amount}</p>
                        </div>
                        <Button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M4 8H12"
                              stroke="#060709"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M8 12V4"
                              stroke="#060709"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </Button>
                      </div>
                      <div className="price">
                        <p>$120.00</p>
                      </div>
                    </div>
                    <div className="total">
                      <p>$240.00</p>
                    </div>
                  </div>
                </div>
                {/* <div className="delivery-features-wrapper">
                  <div className="features">
                    <div>Delivery</div>
                    <div className="features-icon-wrapper"></div>
                    <h3>Order by 10pm for free next day delivery on Orders overs $100</h3>
                    <p>We deliver Monday to Saturday - excluding Holidays</p>
                  </div>
                </div> */}
              </div>
            </Col>
            <Col>col 2</Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default BillingShipping;
