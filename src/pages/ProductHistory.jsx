import React, { useEffect } from "react";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import "../styles/PaymentDetails.scss";
import battery from "../assets/Battery.png";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, myOrders } from "../actions/orderAction";
function ProductHistory() {
  const dispatch = useDispatch();

  const { orders, loading, error } = useSelector((state) => state.myOrders);

  useEffect(() => {
    if (error) {
      window.alert(error);
      dispatch(clearErrors());
    }
    dispatch(myOrders());
  }, [dispatch, error]);

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
              <Nav.Link className="signup " href="/account">
                Orders
              </Nav.Link>
            </Nav>
          </div>
        </Container>
      </section>

      <section className="sec-gap-top bg-color">
        <Container>
          <div className="d-flex align-items-center flex-column product-history">
            <div className="wrapper">
              <div className="heading d-flex">
                <h2 className="text-black ">Order History</h2>
              </div>
              <div className="product-history-wrapper">
                <ul>
                  <Row className="gap-4">
                    {orders && orders.length > 0 ? (
                      orders.map((order) => (
                        <div key={order._id} className="order-item d-flex justify-content-center">
                          <Col Col lg={11} md={12}>
                            <li>
                              <div className="products">
                                <div className="product-info">
                                  {/* <h3 className="text-black">Placed Nov 27,2024</h3> */}
                                  <h3 className="text-black">
                                    Placed:{" "}
                                    {new Date(
                                      order.createdAt
                                    ).toLocaleDateString()}
                                  </h3>
                                  {/* <p className="text-decoration-underline">
                                    Order #1234567890
                                  </p> */}
                                  <p className="text-decoration-underline">
                                    Order #{order._id}
                                  </p>
                                  {/* <p>Order Total: $7.68</p> */}
                                  <p>
                                    Order Total: ${order.totalPrice.toFixed(2)}
                                  </p>
                                </div>
                                <div className="product-status">
                                  <div className="svg-div">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="26"
                                      height="26"
                                      viewBox="0 0 26 26"
                                      fill="none"
                                    >
                                      <path
                                        d="M9.25 10.5001L13.3225 13.5551C13.5748 13.7443 13.8893 13.8312 14.203 13.7983C14.5166 13.7653 14.8062 13.6151 15.0138 13.3776L23 4.25009"
                                        stroke="white"
                                        stroke-width="3"
                                        stroke-linecap="round"
                                      />
                                      <path
                                        d="M24.25 13.0001C24.25 15.3508 23.5138 17.6424 22.1446 19.5531C20.7754 21.4639 18.8421 22.8977 16.6161 23.6533C14.3902 24.4089 11.9836 24.4482 9.73413 23.7658C7.4847 23.0834 5.50553 21.7136 4.07459 19.8486C2.64365 17.9837 1.83283 15.7174 1.75601 13.368C1.67919 11.0186 2.34023 8.70411 3.64628 6.74968C4.95233 4.79524 6.83779 3.29901 9.03783 2.47112C11.2379 1.64324 13.642 1.52529 15.9125 2.13385"
                                        stroke="white"
                                        stroke-width="3"
                                        stroke-linecap="round"
                                      />
                                    </svg>
                                  </div>
                                  {/* <h3 className="text-white">Order Delivered</h3> */}
                                  <h3 className="text-white">
                                    {order.orderStatus}
                                  </h3>
                                </div>
                                <div className="product-details-wrapper">
                                  {order.orderItems.map((item) => (
                                    
                                    <div
                                      key={item.product}
                                      className="product-item"
                                    >
                                      <div className="product-img">
                                        <img
                                          src={battery}
                                          alt={item.name}
                                          width="100%"
                                          height="100%"
                                        />
                                      </div>
                                      <div className="product-details">
                                        <h3 className="text-black">
                                          Product details
                                        </h3>
                                        <p>{item.name}</p>
                                        <p>Quantity: {item.quantity}</p>
                                        <p>Price: ${item.price}</p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </li>
                          </Col>
                          {/* <h2>Order ID: {order._id}</h2> */}
                          {/* <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p> */}
                          {/* <p>Total Amount: ${order.totalPrice.toFixed(2)}</p> */}

                          <div className="order-items">
                            {/* <h3>Items: {orders.length}</h3> */}
                            <ul>
                              {/* {order.orderItems.map((item) => (
                                <li key={item.product}>
                                  <div>
                                    <img src={item.image} alt={item.name} width="50" />
                                    <p>{item.name}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Price: ${item.price}</p>
                                  </div>
                                </li>
                              ))} */}
                            </ul>
                          </div>

                          <hr />
                        </div>
                      ))
                    ) : (
                      <p>Your cart is empty!</p> // Show this if there are no orders
                    )}

                    {/* <Col Col lg={12}>
                      <li>
                        <div className="products">
                          <div className="product-info">
                            <h3 className="text-black">Placed Nov 27,2024</h3>
                            <p className="text-decoration-underline">
                              Order #1234567890
                            </p>
                            <p>Order Total: $7.68</p>
                          </div>
                          <div className="product-status">
                            <div className="svg-div">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                viewBox="0 0 26 26"
                                fill="none"
                              >
                                <path
                                  d="M9.25 10.5001L13.3225 13.5551C13.5748 13.7443 13.8893 13.8312 14.203 13.7983C14.5166 13.7653 14.8062 13.6151 15.0138 13.3776L23 4.25009"
                                  stroke="white"
                                  stroke-width="3"
                                  stroke-linecap="round"
                                />
                                <path
                                  d="M24.25 13.0001C24.25 15.3508 23.5138 17.6424 22.1446 19.5531C20.7754 21.4639 18.8421 22.8977 16.6161 23.6533C14.3902 24.4089 11.9836 24.4482 9.73413 23.7658C7.4847 23.0834 5.50553 21.7136 4.07459 19.8486C2.64365 17.9837 1.83283 15.7174 1.75601 13.368C1.67919 11.0186 2.34023 8.70411 3.64628 6.74968C4.95233 4.79524 6.83779 3.29901 9.03783 2.47112C11.2379 1.64324 13.642 1.52529 15.9125 2.13385"
                                  stroke="white"
                                  stroke-width="3"
                                  stroke-linecap="round"
                                />
                              </svg>
                            </div>
                            <h3 className="text-white">Order Delivered</h3>
                          </div>
                          <div className="product-details-wrapper">
                            <div className="product-img">
                              <img
                                src={battery}
                                alt="product image"
                                width="100%"
                                height="100%"
                              />
                            </div>
                            <div className="product-details">
                              <h3 className="text-black">Product details</h3>
                              <p>$ 12.00 x 3 = $ 36.00</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </Col> */}
                    {/* <Col lg={12}>
                      <li>
                        <div className="products">
                          <div className="product-info">
                            <h3 className="text-black">Placed Nov 27,2024</h3>
                            <p className="text-decoration-underline">
                              Order #1234567890
                            </p>
                            <p>Order Total: $7.68</p>
                          </div>
                          <div className="product-status product-status-2">
                            <div className="svg-div">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                              >
                                <path
                                  d="M15 28.1251C11.519 28.1251 8.18064 26.7423 5.71922 24.2809C3.25781 21.8195 1.875 18.4811 1.875 15.0001C1.875 11.5192 3.25781 8.18076 5.71922 5.71935C8.18064 3.25793 11.519 1.87512 15 1.87512C18.481 1.87512 21.8194 3.25793 24.2808 5.71935C26.7422 8.18076 28.125 11.5192 28.125 15.0001C28.125 18.4811 26.7422 21.8195 24.2808 24.2809C21.8194 26.7423 18.481 28.1251 15 28.1251ZM15 3.75012C12.0163 3.75012 9.15483 4.93539 7.04505 7.04517C4.93526 9.15496 3.75 12.0164 3.75 15.0001C3.75 17.9838 4.93526 20.8453 7.04505 22.9551C9.15483 25.0649 12.0163 26.2501 15 26.2501C17.9837 26.2501 20.8452 25.0649 22.955 22.9551C25.0647 20.8453 26.25 17.9838 26.25 15.0001C26.25 12.0164 25.0647 9.15496 22.9549 7.04517C20.8452 4.93539 17.9837 3.75012 15 3.75012ZM13.5937 8.90637C13.5937 8.53341 13.7419 8.17573 14.0056 7.91201C14.2694 7.64828 14.627 7.50012 15 7.50012C15.373 7.50012 15.7306 7.64828 15.9944 7.91201C16.2581 8.17573 16.4062 8.53341 16.4062 8.90637C16.4062 9.27933 16.2581 9.63702 15.9944 9.90074C15.7306 10.1645 15.373 10.3126 15 10.3126C14.627 10.3126 14.2694 10.1645 14.0056 9.90074C13.7419 9.63702 13.5937 9.27933 13.5937 8.90637ZM15 22.5001C14.7514 22.5001 14.5129 22.4014 14.3371 22.2255C14.1613 22.0497 14.0625 21.8113 14.0625 21.5626L14.0625 13.1251C14.0625 12.8765 14.1613 12.638 14.3371 12.4622C14.5129 12.2864 14.7514 12.1876 15 12.1876C15.2486 12.1876 15.4871 12.2864 15.6629 12.4622C15.8387 12.638 15.9375 12.8765 15.9375 13.1251L15.9375 21.5626C15.9375 21.8113 15.8387 22.0497 15.6629 22.2255C15.4871 22.4014 15.2486 22.5001 15 22.5001Z"
                                  fill="white"
                                />
                              </svg>
                            </div>
                            <h3 className="text-white">
                              Preparing for shipment
                            </h3>
                          </div>
                          <div className="product-details-wrapper">
                            <div className="product-img">
                              <img
                                src={battery}
                                alt="product image"
                                width="100%"
                                height="100%"
                              />
                            </div>
                            <div className="product-details">
                              <h3 className="text-black">Product details</h3>
                              <p>$ 12.00 x 3 = $ 36.00</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </Col> */}
                  </Row>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default ProductHistory;
