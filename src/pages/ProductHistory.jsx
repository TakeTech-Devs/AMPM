import React, { useEffect } from "react";
import { Button, Col, Container, Nav, Row, Dropdown } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';
import "../styles/PaymentDetails.scss";
import battery from "../assets/Battery.png";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, downloadInvoice, myOrders } from "../actions/orderAction";
import { UPDATE_ADMIN_ORDER_RESET } from "../../../admin/src/Constants/OrderConstants";

function ProductHistory() {
  const dispatch = useDispatch();

  const { orders, loading, error } = useSelector((state) => state.myOrders);
  const { error: downloadError, isDownload, loading: downloadLoading } = useSelector((state) => state.invoice);

  useEffect(() => {
    if (error) {
      window.alert(error);
      dispatch(clearErrors());
    }
    if (downloadError) {
      window.alert(downloadError);
      dispatch(clearErrors());
    }
    if (isDownload) {
      dispatch({ type: UPDATE_ADMIN_ORDER_RESET });
    }
    dispatch(myOrders());

  }, [dispatch, error, isDownload]);

  const download = (id) => {
    dispatch(downloadInvoice(id));
  }

  const getStageClass = (status, stage) => {
    const stages = ["Placed", "Shipped", "Delivered"];
    const currentStageIndex = stages.indexOf(status);
    const thisStageIndex = stages.indexOf(stage);

    return currentStageIndex >= thisStageIndex ? "active" : "inactive";
  };

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
                      [...orders].reverse().map((order) => (
                        <div key={order._id} className="order-item d-sm-flex justify-content-sm-center">
                          <Col lg={11} md={12}>
                            <li>
                              <div className="products">
                                <div className="product-info">
                                  <h3 className="text-black">
                                    Placed:{" "}
                                    {new Date(order.createdAt).toLocaleDateString("en-GB", {
                                      day: "2-digit",
                                      month: "short",
                                      year: "numeric",
                                    })}
                                  </h3>
                                  <p className="text-decoration-underline">
                                    Order #{order._id}
                                  </p>
                                  <p>
                                    Order Total: ${order.totalPrice.toFixed(2)}
                                  </p>
                                  <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic">
                                      Invoice
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                      {order.orderStatus === "Delivered" ? (
                                        <Dropdown.Item
                                          onClick={() => download(order._id)}
                                        >
                                          Download Your Invoice
                                        </Dropdown.Item>
                                      ) : (
                                        <Dropdown.Item>
                                          Invoice Is Not Available
                                        </Dropdown.Item>
                                      )}

                                    </Dropdown.Menu>
                                  </Dropdown>

                                </div>
                                {/* <div className="product-status">
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
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                      />
                                      <path
                                        d="M24.25 13.0001C24.25 15.3508 23.5138 17.6424 22.1446 19.5531C20.7754 21.4639 18.8421 22.8977 16.6161 23.6533C14.3902 24.4089 11.9836 24.4482 9.73413 23.7658C7.4847 23.0834 5.50553 21.7136 4.07459 19.8486C2.64365 17.9837 1.83283 15.7174 1.75601 13.368C1.67919 11.0186 2.34023 8.70411 3.64628 6.74968C4.95233 4.79524 6.83779 3.29901 9.03783 2.47112C11.2379 1.64324 13.642 1.52529 15.9125 2.13385"
                                        stroke="white"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                      />
                                    </svg>
                                  </div>
                                  <h3 className="text-white">
                                    {order.orderStatus}
                                  </h3>
                                </div> */}
                                {/* Progress Bar */}
                                {/* <div className="progress-stepper">
                                  <div className="step">
                                    <p className="status">Ordered</p>
                                    <div className="circle"></div>
                                    <p className="date">
                                      {new Date(order.createdAt).toLocaleDateString("en-GB", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                      })}
                                    </p>
                                  </div>

                                  <div className="step">
                                    <p className="status">Shipped</p>
                                    <div className="circle"></div>
                                    <p className="date">
                                      {order.deliveredAt
                                        ? new Date(order.deliveredAt).toLocaleDateString("en-GB", {
                                          day: "2-digit",
                                          month: "short",
                                          year: "numeric",
                                        })
                                        : ""}
                                    </p>
                                  </div>

                                  <div className="step">
                                    <p className="status">Delivered</p>
                                    <div className="circle"></div>
                                    <p className="date">
                                      {order.deliveredAt
                                        ? new Date(order.deliveredAt).toLocaleDateString("en-GB", {
                                          day: "2-digit",
                                          month: "short",
                                          year: "numeric",
                                        })
                                        : ""}
                                    </p>
                                  </div>
                                </div> */}


                                <div className="progress-stepper">
                                  {/* Order Confirmed Step */}
                                  <div className={`step ${order.orderStatus === "Placed" ? "active" : ""}`}>
                                    <p className="status">Order Confirmed</p>
                                    <div className={`circle ${order.orderStatus === "Placed" ? "active" : ""}`}></div>
                                    <p className="date">
                                      {new Date(order.createdAt).toLocaleDateString("en-GB", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                      })}
                                    </p>
                                  </div>

                                  {/* Line from Order Confirmed to Shipped */}
                                  <div className={`line ${order.orderStatus === "Shipped" || order.orderStatus === "Delivered" ? "active" : ""}`} />

                                  {/* Shipped Step */}
                                  <div className={`step ${order.orderStatus === "Shipped" ? "active" : ""}`}>
                                    <p className="status">Shipped</p>
                                    <div className={`circle ${order.orderStatus === "Shipped" ? "active" : ""}`}></div>
                                    <p className="date">
                                      {order.shippedAt
                                        ? new Date(order.shippedAt).toLocaleDateString("en-GB", {
                                          day: "2-digit",
                                          month: "short",
                                          year: "numeric",
                                        })
                                        : ""}
                                    </p>
                                  </div>

                                  {/* Line from Shipped to Delivered */}
                                  <div className={`line ${order.orderStatus === "Delivered" ? "active" : ""}`} />

                                  {/* Delivered Step */}
                                  <div className={`step ${order.orderStatus === "Delivered" ? "active" : ""}`}>
                                    <p className="status">Delivered</p>
                                    <div className={`circle ${order.orderStatus === "Delivered" ? "active" : ""}`}></div>
                                    <p className="date">
                                      {order.deliveredAt
                                        ? new Date(order.deliveredAt).toLocaleDateString("en-GB", {
                                          day: "2-digit",
                                          month: "short",
                                          year: "numeric",
                                        })
                                        : ""}
                                    </p>
                                  </div>
                                </div>


                                <div className="product-details-wrapper">
                                  {order.orderItems.map((item) => (
                                    <div key={item.product} className="product-item">
                                      <div className="product-img">
                                        <img
                                          src={battery}
                                          alt={item.name}
                                          width="100%"
                                          height="100%"
                                        />
                                      </div>
                                      <div className="product-details">
                                        <h3 className="text-black">Product details</h3>
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
                          <hr />
                        </div>
                      ))
                    ) : (
                      <p>Your cart is empty!</p>
                    )}

                  </Row>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section >

    </>
  );
}

export default ProductHistory;
