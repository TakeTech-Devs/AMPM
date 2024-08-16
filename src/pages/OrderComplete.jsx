import React from "react";
import "../styles/PaymentDetails.scss";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import p1 from "../assets/p1.png";

function OrderComplete() {
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
      <section className="bg-color bill-order-lifecycle override-checkout override-orderComplete">
        <Container>
          <div className="order-wrapper">
            <div className="first-orders">
              <div className="icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                >
                  <path
                    d="M1.56445 5L5.18445 8.62L12.4372 1.38"
                    stroke="#05422C"
                    stroke-width="1.5"
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
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                >
                  <path
                    d="M1.56445 5L5.18445 8.62L12.4372 1.38"
                    stroke="#05422C"
                    stroke-width="1.5"
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
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.4568 3.92146H4.1543L5.86346 2.21229C7.25763 0.818122 7.95763 0.818122 9.3518 2.21229L9.7018 2.56229C9.3343 2.92979 9.2468 3.47229 9.4568 3.92146Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.76172 3.92155L5.76172 12.6715"
                    stroke="white"
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
      <section>
        <Container>
          <div className="order-complete-wrapper">
            <div className="order-show">
              <h3>Your Order</h3>
              <div className="paid-or-not">
                <div className="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M11.9386 6.62855L11.9386 6.6286L11.9445 6.62251C12.3461 6.20706 12.3546 5.54245 11.9386 5.12645C11.5258 4.71369 10.8492 4.71369 10.4364 5.12645L6.935 8.62789L5.56355 7.25645C5.15079 6.84368 4.47421 6.84368 4.06145 7.25645C3.64868 7.66921 3.64868 8.34579 4.06145 8.75855L6.18395 10.8811C6.38164 11.0788 6.65089 11.1925 6.935 11.1925C7.21911 11.1925 7.48836 11.0788 7.68605 10.8811L11.9386 6.62855ZM1 8C1 4.14364 4.14364 1 8 1C11.8564 1 15 4.14364 15 8C15 11.8564 11.8564 15 8 15C4.14364 15 1 11.8564 1 8Z"
                      fill="#17AF26"
                      stroke="#17AF26"
                    />
                  </svg>
                </div>
                <p>Paid</p>
              </div>
            </div>
            <div className="order-items-show">
              <ul>
                <li>
                  <div className="items">
                    <div className="items-details">
                      <div className="img-title-wrapper">
                        <div className="img-div">
                          <img
                            src={p1}
                            alt="product 1"
                            width="100%"
                            height="100%"
                          />
                        </div>
                        <div className="items-name">
                          <p>1x Jungle Diamond</p>
                          <p>(AA+)</p>
                        </div>
                      </div>
                      <div className="price">
                        <p className="how-many-items">1x</p>
                        <p className="total-price">$200.00</p>
                      </div>
                      <div className="final-price">
                        <p>$200.00</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="items">
                    <div className="items-details">
                      <div className="img-title-wrapper">
                        <div className="img-div">
                          <img
                            src={p1}
                            alt="product 1"
                            width="100%"
                            height="100%"
                          />
                        </div>
                        <div className="items-name">
                          <p>1x Jungle Diamond</p>
                          <p>(AA+)</p>
                        </div>
                      </div>
                      <div className="price">
                        <p className="how-many-items">1x</p>
                        <p className="total-price">$200.00</p>
                      </div>
                      <div className="final-price">
                        <p>$200.00</p>
                      </div>
                    </div>
                  </div>
                </li>

                <div className="sub-total">
                  <h3>TOTAL</h3>
                  <h3 className="amount">$497.00</h3>
                </div>
              </ul>
            </div>
            <div className="address-wrapper">
              <Row>
                <Col>
                  <div className="left-address">
                    <div className="address">
                      <p className="heading">Shipping</p>
                      <p>New York, US</p>
                    </div>
                    <div className="address">
                      <p className="heading">Shipping Options</p>
                      <p>Same-Day Dispatching</p>
                    </div>
                    <div className="address">
                      <p className="heading">Email Money Transfer</p>
                      <p>Interac</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="right-address">
                    <div className="address">
                      <p className="heading">Subtotal</p>
                      <p>$497.00</p>
                    </div>
                    <div className="address">
                      <p className="heading">Discount</p>
                      <p>$0.0</p>
                    </div>
                    <div className="address">
                      <p className="heading">Shipping Costs</p>
                      <p>$50.00</p>
                    </div>
                    <div className="address">
                      <p className="heading">Point</p>
                      <p>- $250</p>
                    </div>
                    <div className="total">
                      <p>TOTAL</p>
                      <h3 className="amount">$297.00</h3>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="new-order-btn-wrapper">
              <p>New Order, Click button bellow</p>
              <Button className="primary">Shop Now</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default OrderComplete;
