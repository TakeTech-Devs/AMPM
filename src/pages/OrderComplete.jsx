import React from "react";
import "../styles/PaymentDetails.scss";
import { Container, Nav } from "react-bootstrap";
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
        <Container></Container>
      </section>
    </>
  );
}

export default OrderComplete;
