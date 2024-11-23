import React, { useEffect, useState } from "react";
import { Button, Col, Container, Nav, Row, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/PaymentDetails.scss";
// import p1 from "../assets/p1.png";
import { useDispatch, useSelector } from "react-redux";
import { removeItemsFromCart } from '../actions/cartAction';
import { addItemsToCart } from "../actions/cartAction";
import imageIcon from "../assets/mission-image.png";
import { applyCouponCode, clearErrors } from "../actions/userActions";

function BillingShipping() {
  const [quantity, setQuantity] = useState(1);
  const [subtotal, setSubtotal] = useState(120.0);
  const [coupon, setCoupon] = useState("");
  // const [discount, setDiscount] = useState(0);
  const [shippingCost] = useState(50.0);
  const [total, setTotal] = useState(subtotal + shippingCost);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  const { isAuthenticated } = useSelector(
    (state) => state.user
  );

  const { discount, totalAfterDiscount, message, error, loading } = useSelector(
    (state) => state.coupon
  );

  const calculateSubtotal = () => {
    return cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const amountToPay = parseFloat(calculateSubtotal());

  const calculateShippingCost = () => {
    if (!amountToPay) return 0; // Initial stage, show 0
    return amountToPay >= 100 ? 0 : 50.0;
  };


  const calculateTotal = () => {
    const shipping = calculateShippingCost();
    const totalBeforeDiscount = amountToPay + shipping;
    return discount !== null ? totalAfterDiscount : totalBeforeDiscount.toFixed(2);
  };

  const handleIncrease = (productId, quantity) => {
    const updatedQuantity = quantity + 1;
    dispatch(addItemsToCart(productId, updatedQuantity));
  };

  const handleDecrease = (productId, quantity) => {
    if (quantity > 1) {
      const updatedQuantity = quantity - 1;
      dispatch(addItemsToCart(productId, updatedQuantity));
    }
  };


  const removeCartItem = (id) => {
    dispatch(removeItemsFromCart(id));
    window.alert("Product Removed From Cart");
  }


  const handleCouponChange = (e) => {
    setCoupon(e.target.value);
  };

  const applyCouponHandler = (e) => {
    e.preventDefault();
    if (!coupon.trim()) {
      alert("Please enter a valid coupon code.");
      return;
    }
    dispatch(applyCouponCode(coupon, amountToPay));
  };


  const handleCheckout = () => {
    const total = calculateSubtotal();
    const totalFinal = calculateTotal();
    const Discount = discount;
    console.log({ total, totalFinal, Discount });
    navigate("/checkout", { state: { total, totalFinal, Discount } });
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
    const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setQuantity(totalQuantity);
  })

  const handleLogin = () => {
    navigate("/login");
  }

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
      <section className="bg-color bill-order-lifecycle">
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
            <div className="d-flex align-items-center">
              <div className="line"></div>
            </div>
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
            <div className="d-flex align-items-center">
              <div className="line"></div>
            </div>
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
            <Col lg={7}>
              <div className="left-bill">
                <div className="cart-heading">
                  <h3>Your Cart</h3>
                  <p>({cartItems.length})</p>
                </div>

                {cartItems.length === 0 ? (
                  <Col>
                    <p>No items in the cart.</p>
                  </Col>
                ) : (
                  <>
                    {cartItems.map((item) => (
                      <>
                        <div className="add-to-cart-items">
                          <ul>
                            <li>
                              <div className="items">
                                <div className="items-details">
                                  <div className="img-div">
                                    <img
                                      // src={item.image}
                                      src={imageIcon}
                                      alt={item.name.split(" ")[0]}
                                      width="100%"
                                      height="100%"
                                    />
                                  </div>
                                  <div className="items-name">
                                    {/* <p>1x Khalifa Kush</p> */}
                                    <p>{item.name}</p>
                                    {/* <p>(AAAA)</p> */}
                                  </div>
                                </div>
                                <div className="prices-wrapper">
                                  <div className="count-price-wrapper">
                                    <div className="counter">
                                      <Button onClick={() => handleDecrease(item.product, item.quantity)}>
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
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                        </svg>
                                      </Button>
                                      <div className="amount">
                                        <p>{item.quantity}</p>
                                      </div>
                                      <Button onClick={() => handleIncrease(item.product, item.quantity)}>
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
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M8 12V4"
                                            stroke="#060709"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                        </svg>
                                      </Button>
                                    </div>
                                    <div className="price">
                                      <p>${item.price}</p>
                                    </div>


                                  </div>
                                  <button className="del-btn" onClick={() => removeCartItem(item.product)}>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="13"
                                      height="14"
                                      viewBox="0 0 13 14"
                                      fill="none"
                                    >
                                      <path
                                        d="M10.9254 1.72926L8.49411 1.72517L8.49479 1.32222C8.49591 0.654582 7.90307 0.112371 7.17064 0.11114L5.4024 0.10817C4.66996 0.106939 4.07531 0.647156 4.07418 1.3148L4.07351 1.71775L1.64218 1.71366C1.03183 1.71264 0.536268 2.16283 0.535334 2.71918L0.53398 3.52509C0.533606 3.74764 0.731207 3.92837 0.975363 3.92878L11.5848 3.9466C11.829 3.94701 12.0272 3.76695 12.0275 3.5444L12.0289 2.73849C12.0298 2.18214 11.5358 1.73028 10.9254 1.72926ZM4.9583 1.31628C4.95868 1.09415 5.15736 0.913663 5.40104 0.914072L7.16928 0.917043C7.41297 0.917452 7.61104 1.09861 7.61067 1.32074L7.60999 1.72369L4.95763 1.71923L4.9583 1.31628Z"
                                        fill="white"
                                      />
                                      <path
                                        d="M1.43462 4.69516C1.35677 4.69503 1.29463 4.75619 1.29821 4.82943L1.64622 11.9433C1.67838 12.6017 2.25183 13.1182 2.95159 13.1194L9.57774 13.1305C10.2775 13.1317 10.8527 12.6171 10.8871 11.9588L11.259 4.84615C11.2628 4.77292 11.2009 4.71156 11.123 4.71143L1.43462 4.69516ZM8.0224 5.73326C8.02278 5.50628 8.21835 5.32277 8.45942 5.32318C8.70049 5.32358 8.89543 5.50775 8.89505 5.73472L8.88607 11.0753C8.88569 11.3023 8.69012 11.4858 8.44905 11.4854C8.20798 11.485 8.01304 11.3008 8.01342 11.0738L8.0224 5.73326ZM5.84077 5.7296C5.84115 5.50262 6.03672 5.31911 6.27779 5.31952C6.51886 5.31992 6.7138 5.50409 6.71342 5.73106L6.70444 11.0716C6.70406 11.2986 6.5085 11.4821 6.26743 11.4817C6.02636 11.4813 5.83141 11.2972 5.83179 11.0702L5.84077 5.7296ZM3.65914 5.72594C3.65952 5.49896 3.85509 5.31545 4.09616 5.31585C4.33723 5.31626 4.53217 5.50043 4.53179 5.7274L4.52281 11.068C4.52243 11.295 4.32687 11.4785 4.0858 11.4781C3.84473 11.4777 3.64978 11.2935 3.65016 11.0665L3.65914 5.72594Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </button>
                                  <div className="total">
                                    <p>
                                      ${(item.price * item.quantity).toFixed(2)}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                            </li>
                          </ul>
                        </div>
                      </>
                    ))}
                    <div className="add-to-cart-items">
                      <ul>
                        <li>
                          <div className="subtotal">
                            <p>Subtotal</p>
                            <p className="totalamount">
                              ${calculateSubtotal()}
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </Col>
            <Col lg={5}>
              <div className="right-bill">
                <div className="amount-display d-flex flex-column gap-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="sms">Subtotal</p>
                    <p>${calculateSubtotal()}</p>
                  </div>
                  {/* {discount > 0 ? (
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="sms">Discount</p>
                      <p>-${discount.toFixed(2)}</p>{" "}
                     
                    </div>
                  ) : (
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="sms">Discount</p>
                      <p>${discount.toFixed(2)}</p>{" "}
                      
                    </div>
                  )} */}
                  {discount !== null && (
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="sms">Discount</p>
                      <p>-${discount.toFixed(2)}</p>
                    </div>
                  )}
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="sms">Shipping Costs</p>
                    <p>${calculateShippingCost().toFixed(2)}</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="sms">Order Total</p>
                    {/* <p>${subtotal.toFixed(2)}</p> */} 
                    <p>${parseFloat(calculateTotal()).toFixed(2)}</p>
                  </div>
                </div>
                <div className="apply-coupon-wrapper">
                  <Form onSubmit={applyCouponHandler}>
                    <div className="d-flex gap-3 coupon-wrapper">
                      <Form.Control
                        className="custom-outline coupon-box"
                        type="text"
                        placeholder="Coupon code"
                        value={coupon}
                        onChange={handleCouponChange}
                      />
                      <Button
                        className="apply-btn"
                        variant="primary"
                        type="submit"
                        disabled={loading}
                      >
                        {/* Apply Coupon */}
                        {loading ? "Applying..." : "Apply Coupon"}
                      </Button>
                    </div>
                  </Form>
                  {message && <p className="text-success">{message}</p>}
                </div>
                <div className="sms-show">
                  <p className="limit-sms">
                    {amountToPay >= 100 ? (
                      <>
                        Congratulations! You get <span className="limit-amount">Free Shipping</span>.
                      </>
                    ) : cartItems.length > 0 ? (
                      <>
                        Get Free <span>Shipping</span> for orders over
                        <span className="limit-amount"> $100.00</span>. Add $
                        <span className="limit-amount">{(100 - amountToPay).toFixed(2)}</span> more to qualify.
                      </>
                    ) : (
                      <>
                        Get Free <span>Shipping</span> for orders over
                        <span className="limit-amount"> $100.00</span>.
                      </>
                    )}
                  </p>

                  <p>Continue Shopping</p>
                </div>
                <div className="checkout-btn">
                  {isAuthenticated ? (
                    <>
                      {quantity > 0 ? (
                        <Button
                          className="d-flex justify-content-center gap-2 add-to-cart-btn-color"
                          onClick={handleCheckout}
                        >
                          {" "}
                          <span>Checkout</span> <span>|</span>{" "}
                          {/* <span>${total.toFixed(2)}</span>{" "} */}
                          <span>${parseFloat(calculateTotal()).toFixed(2)}</span>{" "}
                        </Button>
                      ) : (
                        <Button
                          className="d-flex justify-content-center gap-2"
                          disabled
                          style={{
                            cursor: "not-allowed",
                            pointerEvents: "auto",
                          }}
                        >
                          {" "}
                          <span>Add Products to Proceed</span>
                          {/* <span>|</span>{" "} */}
                          {/* <span>${total.toFixed(2)}</span>{" "} */}
                        </Button>
                      )}
                    </>
                  ) : (
                    <Button
                      className="d-flex justify-content-center gap-2"
                      // disabled
                      // style={{
                      //   cursor: "not-allowed",
                      //   pointerEvents: "auto",
                      // }}
                      onClick={handleLogin}
                    >
                      {" "}
                      <span>Login to Proceed</span>
                      {/* <span>|</span>{" "} */}
                      {/* <span>${total.toFixed(2)}</span>{" "} */}
                    </Button>
                  )
                  }
                </div>
                <div className="show-payment-cards">
                  <p>SECURE PAYMENTS PROVIDED BY</p>
                  <div className="cards">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="18"
                        viewBox="0 0 30 18"
                        fill="none"
                      >
                        <circle cx="9" cy="9" r="9" fill="#E80B26" />
                        <circle cx="21" cy="9" r="9" fill="#F59D31" />
                        <path
                          d="M15 15.7083C16.8413 14.0603 18 11.6655 18 9C18 6.33447 16.8413 3.9397 15 2.29175C13.1587 3.9397 12 6.33447 12 9C12 11.6655 13.1587 14.0603 15 15.7083Z"
                          fill="#FC6020"
                        />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="38"
                        height="14"
                        viewBox="0 0 38 14"
                        fill="none"
                      >
                        <path
                          d="M19.6045 5.06401C19.5845 6.55968 21.0136 7.39437 22.0902 7.89059C23.1964 8.3998 23.5679 8.72629 23.5637 9.18158C23.5552 9.87849 22.6813 10.186 21.8633 10.198C20.4363 10.219 19.6066 9.83356 18.947 9.54201L18.4329 11.8175C19.0947 12.106 20.3201 12.3576 21.591 12.3686C24.5738 12.3686 26.5254 10.9758 26.5359 8.81615C26.5476 6.07543 22.5282 5.92367 22.5557 4.69859C22.5652 4.32717 22.9399 3.93079 23.7611 3.82994C24.1674 3.77902 25.2894 3.74009 26.5613 4.29422L27.0605 2.09266C26.3766 1.85703 25.4973 1.63138 24.4028 1.63138C21.5952 1.63138 19.6204 3.04318 19.6045 5.06401ZM31.8577 1.82109C31.3131 1.82109 30.854 2.12162 30.6492 2.5829L26.3882 12.2068H29.3689L29.9621 10.6563H33.6046L33.9487 12.2068H36.5758L34.2833 1.82109H31.8577ZM32.2747 4.6267L33.1349 8.5266H30.779L32.2747 4.6267ZM15.9905 1.82109L13.641 12.2068H16.4813L18.8298 1.82109H15.9905ZM11.7886 1.82109L8.83217 8.89003L7.6363 2.87943C7.49592 2.20848 6.94178 1.82109 6.32643 1.82109H1.49333L1.42578 2.12261C2.41794 2.3263 3.54521 2.65478 4.22811 3.00623C4.64609 3.2209 4.76536 3.4086 4.90257 3.91881L7.16766 12.2068H10.1695L14.7714 1.82109H11.7886Z"
                          fill="url(#paint0_linear_184_4173)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_184_4173"
                            x1="17.5857"
                            y1="12.584"
                            x2="17.8797"
                            y2="1.5558"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#222357" />
                            <stop offset="1" stop-color="#254AA5" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M19.7009 12.4183C18.3647 17.7783 12.9343 21.0365 7.5819 19.7004C2.22174 18.3643 -1.03655 12.934 0.299583 7.58173C1.63572 2.22169 7.05839 -1.03653 12.4186 0.299576C17.7709 1.62787 21.037 7.05823 19.7009 12.4183Z"
                          fill="url(#paint0_linear_184_4175)"
                        />
                        <path
                          d="M14.7617 8.75403C14.957 7.4259 13.9492 6.70715 12.5586 6.23059L13.0117 4.4259L11.918 4.15247L11.4805 5.91028C11.1914 5.83997 10.8945 5.76965 10.5977 5.70715L11.0352 3.94153L9.94141 3.66809L9.49609 5.46497C9.25391 5.41028 9.01953 5.35559 8.79297 5.3009V5.29309L7.27734 4.91809L6.98828 6.08997C6.98828 6.08997 7.80078 6.27747 7.78516 6.28528C8.23047 6.39465 8.30859 6.69153 8.29297 6.9259L7.77734 8.98059C7.80859 8.9884 7.84766 8.99622 7.89453 9.01965C7.85547 9.01184 7.81641 9.00403 7.77734 8.9884L7.05859 11.8634C7.00391 11.9962 6.86328 12.1993 6.55859 12.1212C6.56641 12.1368 5.76172 11.9259 5.76172 11.9259L5.21484 13.1837L6.64453 13.5431C6.91016 13.6134 7.16797 13.6759 7.42578 13.7462L6.97266 15.5665L8.06641 15.84L8.51953 14.0353C8.81641 14.1134 9.11328 14.1915 9.39453 14.2618L8.94922 16.0587L10.043 16.3322L10.4961 14.5118C12.3711 14.8634 13.7773 14.7228 14.3633 13.0275C14.8398 11.6681 14.3398 10.879 13.3555 10.3634C14.082 10.1993 14.6211 9.72278 14.7617 8.75403ZM12.2539 12.2697C11.918 13.629 9.62109 12.8947 8.87891 12.7072L9.48047 10.2931C10.2227 10.4806 12.6133 10.8478 12.2539 12.2697ZM12.5977 8.73059C12.2852 9.97278 10.3789 9.33997 9.76172 9.18372L10.3086 6.99622C10.9258 7.15247 12.918 7.44153 12.5977 8.73059Z"
                          fill="white"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_184_4175"
                            x1="9.99466"
                            y1="-0.0047105"
                            x2="9.99466"
                            y2="19.998"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#F9AA4B" />
                            <stop offset="1" stop-color="#F7931A" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M1.94972 0.34082H18.0482C18.2596 0.340805 18.469 0.382434 18.6643 0.46333C18.8596 0.544226 19.0371 0.662804 19.1866 0.812295C19.3361 0.961786 19.4548 1.13926 19.5357 1.33459C19.6166 1.52992 19.6583 1.73927 19.6583 1.9507V18.0495C19.6583 18.2609 19.6166 18.4702 19.5357 18.6656C19.4548 18.8609 19.3362 19.0383 19.1867 19.1878C19.0372 19.3373 18.8597 19.4559 18.6644 19.5367C18.469 19.6176 18.2597 19.6593 18.0483 19.6592H1.94949C1.52261 19.6592 1.1132 19.4897 0.81134 19.1878C0.509475 18.886 0.339874 18.4766 0.339844 18.0497V1.95058C0.339874 1.52364 0.509499 1.11419 0.811407 0.812302C1.11331 0.510416 1.52278 0.34082 1.94972 0.34082Z"
                          fill="#FDB913"
                        />
                        <path
                          d="M18.0493 0.340728C18.4762 0.34085 18.8856 0.510523 19.1875 0.812439C19.4893 1.11436 19.6589 1.52379 19.6589 1.95072V18.0494C19.6589 18.4763 19.4893 18.8857 19.1875 19.1876C18.8856 19.4895 18.4762 19.6592 18.0493 19.6593H1.95061C1.73918 19.6593 1.52982 19.6177 1.33448 19.5368C1.13914 19.4559 0.96165 19.3373 0.812149 19.1878C0.662649 19.0383 0.544068 18.8609 0.46318 18.6655C0.382292 18.4702 0.340683 18.2608 0.340728 18.0494V1.95072C0.340683 1.73929 0.382292 1.52992 0.463178 1.33458C0.544065 1.13923 0.662644 0.961733 0.812142 0.812224C0.961641 0.662714 1.13913 0.544123 1.33447 0.463222C1.52981 0.382322 1.73918 0.340698 1.95061 0.340728H18.0493ZM18.0493 0H1.95061C1.43342 0.000546867 0.937577 0.206248 0.571883 0.571964C0.206188 0.93768 0.00051644 1.43354 0 1.95072L0 18.0494C0.000577133 18.5665 0.206272 19.0624 0.571957 19.428C0.937641 19.7937 1.43345 19.9994 1.95061 20H18.0493C18.5664 19.9994 19.0622 19.7937 19.4278 19.428C19.7935 19.0623 19.9991 18.5665 19.9997 18.0494V1.95072C19.9992 1.43357 19.7935 0.937727 19.4279 0.572011C19.0622 0.206295 18.5664 0.000577293 18.0493 0Z"
                          fill="white"
                        />
                        <path
                          d="M11.1261 10.2085L11.1245 6.74973L12.0274 6.53547V6.98901C12.0274 6.98901 12.2612 6.39271 12.804 6.25431C12.885 6.2282 12.9712 6.2224 13.0551 6.23744V7.11996C12.8925 7.12208 12.7319 7.15551 12.582 7.21842C12.2484 7.35017 12.0805 7.63765 12.0805 8.0765L12.0811 9.98636L11.1261 10.2085ZM6.36685 11.3333C6.36685 11.3333 6.21996 11.1132 6.21996 10.3349V8.61289L5.75551 8.72341V8.01384L6.2211 7.90389V7.1304L7.18109 6.90375V7.67713L7.85933 7.516V8.22465L7.18109 8.38566C7.18109 8.38566 7.17994 9.79666 7.18109 10.1392C7.18109 10.9367 7.39271 11.0898 7.39271 11.0898L6.36685 11.3333ZM7.95974 9.27564C7.95974 8.66075 8.04731 8.21214 8.23529 7.86786C8.45907 7.45931 8.82574 7.19306 9.36007 7.07141C10.4132 6.8319 10.7934 7.45529 10.7786 8.29122C10.773 8.59017 10.7744 8.7358 10.7744 8.7358L8.91892 9.1719V9.20174C8.91892 9.78587 9.04137 10.063 9.41148 9.98441C9.73121 9.91705 9.82015 9.71679 9.8454 9.46913C9.84953 9.42919 9.85148 9.32763 9.85148 9.32763L10.7207 9.11934C10.7207 9.11934 10.7227 9.19049 10.7215 9.27036C10.7139 9.60225 10.6174 10.4256 9.4093 10.7112C8.2649 10.9828 7.95986 10.2839 7.95986 9.27553M9.39863 7.71569C9.09118 7.78546 8.92994 8.08705 8.92294 8.58673L9.8563 8.36443C9.8579 8.34183 9.85813 8.29202 9.8579 8.21398C9.8563 7.83676 9.7397 7.63765 9.39863 7.71569ZM16.3044 7.25297C16.2684 6.19957 16.5416 5.36353 17.7169 5.09728C18.466 4.92709 18.7505 5.12195 18.8945 5.31028C19.033 5.48999 19.0865 5.73237 19.0865 6.07184L19.0873 6.13415L18.1678 6.35266L18.1671 6.2247C18.1678 5.82212 18.0559 5.66902 17.7635 5.74224C17.4158 5.82957 17.2753 6.15963 17.2753 6.81584C17.2753 7.0488 17.2765 7.09058 17.2765 7.12202C17.2765 7.7889 17.3675 8.09417 17.7682 8.01028C18.1159 7.93844 18.1634 7.63317 18.1691 7.36555C18.1698 7.32354 18.1715 7.18904 18.1715 7.18904L19.0896 6.97214C19.0896 6.97214 19.0905 7.03997 19.0905 7.11537C19.0882 7.98985 18.6273 8.54094 17.7638 8.74189C16.5742 9.02076 16.3413 8.33333 16.3043 7.25297M13.1259 8.72777C13.1259 7.9265 13.5952 7.67311 14.3017 7.38081C14.937 7.11801 14.9508 6.98752 14.9534 6.75915C14.9569 6.56692 14.8678 6.40247 14.5515 6.48314C14.4461 6.5044 14.3509 6.56065 14.2814 6.64279C14.2119 6.72492 14.1722 6.82812 14.1687 6.93565C14.1635 6.99468 14.1615 7.05394 14.1627 7.11319L13.272 7.32354C13.266 7.14602 13.2867 6.9686 13.3335 6.79725C13.4758 6.31812 13.8984 5.99575 14.6279 5.82693C15.5756 5.60854 15.8914 6.02444 15.8925 6.67135V8.20331C15.8925 8.94421 16.0301 9.05278 16.0301 9.05278L15.1557 9.25969C15.1074 9.15865 15.0682 9.05354 15.0385 8.94559C15.0385 8.94559 14.8468 9.42805 14.1866 9.5832C13.4931 9.74674 13.1259 9.31696 13.1259 8.72777ZM14.9474 7.63363C14.8 7.73698 14.6444 7.82809 14.4821 7.90608C14.1906 8.04849 14.0589 8.2242 14.0589 8.4948C14.0589 8.72915 14.2041 8.88304 14.4679 8.81786C14.7509 8.74648 14.9474 8.48241 14.9474 8.11552V7.63363ZM1.3474 13.7579C1.24759 13.7578 1.14966 13.7307 1.06392 13.6797C0.978177 13.6286 0.907797 13.5553 0.860189 13.4676C0.81258 13.3799 0.789504 13.2809 0.79339 13.1812C0.797275 13.0814 0.827979 12.9846 0.882269 12.9009L0.888466 12.8928L0.898795 12.8901L2.20467 12.5818V13.5735L2.18436 13.5782C1.94378 13.6361 1.70273 13.6921 1.46124 13.7461C1.42381 13.754 1.38566 13.758 1.3474 13.7579ZM1.3474 15.0265C1.20047 15.0265 1.05954 14.9682 0.955578 14.8644C0.851618 14.7605 0.793136 14.6197 0.792984 14.4727C0.792684 14.3657 0.823722 14.2609 0.882269 14.1713L0.888466 14.1621L0.898795 14.1593L2.20467 13.8512V14.8429L2.18436 14.8481C1.88816 14.9193 1.53412 15.0012 1.46124 15.0158C1.42373 15.0231 1.3856 15.0266 1.3474 15.0265ZM1.3474 16.2976C1.20041 16.2975 1.05946 16.2391 0.95551 16.1351C0.85156 16.0312 0.793106 15.8903 0.792984 15.7433C0.792593 15.6362 0.823638 15.5315 0.882269 15.4419L0.888466 15.4319L2.20467 15.1217V16.1133L2.18436 16.1187C1.87152 16.1939 1.52413 16.2724 1.46124 16.2862C1.42376 16.2938 1.38563 16.2976 1.3474 16.2976ZM2.20455 6.75513V12.3036L1.19327 12.5428L1.19293 6.99418L2.20455 6.75513ZM3.71298 12.0707C3.7141 11.988 3.69879 11.9059 3.66793 11.8292C3.63706 11.7525 3.59127 11.6827 3.5332 11.6238C3.47514 11.565 3.40595 11.5182 3.32967 11.4863C3.25339 11.4544 3.17153 11.438 3.08885 11.438C3.00617 11.438 2.92431 11.4544 2.84803 11.4863C2.77175 11.5182 2.70257 11.565 2.6445 11.6238C2.58643 11.6827 2.54064 11.7525 2.50978 11.8292C2.47891 11.9059 2.4636 11.988 2.46472 12.0707L2.46587 17.2568C2.46641 17.7046 2.64447 18.1339 2.96101 18.4507C3.27755 18.7675 3.70676 18.9459 4.15459 18.9467C4.62706 18.9467 5.92134 18.9444 5.92134 18.9444L5.92192 16.781L5.92249 14.3683C5.92264 14.2338 5.88959 14.1014 5.82627 13.9827C5.76294 13.8641 5.67131 13.7629 5.5595 13.6881L3.98497 12.6185L3.98451 15.0472C3.98451 15.0649 3.98104 15.0823 3.97429 15.0986C3.96754 15.1149 3.95765 15.1297 3.94518 15.1422C3.93271 15.1547 3.91791 15.1645 3.90162 15.1713C3.88533 15.178 3.86787 15.1815 3.85024 15.1815C3.83261 15.1815 3.81515 15.178 3.79886 15.1713C3.78256 15.1645 3.76776 15.1547 3.75529 15.1422C3.74283 15.1297 3.73294 15.1149 3.72619 15.0986C3.71944 15.0823 3.71597 15.0649 3.71597 15.0472C3.71597 15.0212 3.71298 12.3914 3.71298 12.0707ZM4.55591 8.20147C4.36457 8.24587 4.18506 8.33106 4.02967 8.4512C3.87427 8.57135 3.74663 8.72362 3.65549 8.89762V8.50766L2.74462 8.72318L2.74577 11.2135C2.90554 11.1503 3.07965 11.1326 3.24888 11.1622C3.41811 11.1918 3.57587 11.2676 3.70472 11.3812V9.77337C3.70472 9.38811 3.89637 9.08043 4.17019 9.02007C4.37619 8.97485 4.54822 9.04853 4.54822 9.41542L4.54891 11.7614L5.50832 11.5365V9.05473C5.50832 8.45303 5.27661 8.03243 4.55591 8.20147ZM18.4956 4.65017C18.3782 4.65028 18.2635 4.61558 18.1659 4.55046C18.0682 4.48534 17.9921 4.39272 17.9472 4.28434C17.9022 4.17595 17.8904 4.05665 17.9133 3.94156C17.9361 3.82646 17.9926 3.72073 18.0756 3.63774C18.1585 3.55476 18.2643 3.49825 18.3794 3.47537C18.4945 3.45249 18.6137 3.46427 18.7221 3.50921C18.8305 3.55416 18.9232 3.63024 18.9883 3.72785C19.0535 3.82546 19.0882 3.94019 19.0881 4.05754C19.0879 4.21466 19.0255 4.3653 18.9144 4.47642C18.8033 4.58754 18.6527 4.64995 18.4956 4.65017ZM18.4956 3.53881C18.393 3.53879 18.2927 3.56918 18.2074 3.62615C18.1221 3.68312 18.0556 3.7641 18.0164 3.85885C17.9771 3.95361 17.9668 4.05788 17.9868 4.15849C18.0068 4.25909 18.0561 4.35151 18.1287 4.42405C18.2012 4.4966 18.2936 4.54601 18.3942 4.56604C18.4948 4.58608 18.599 4.57583 18.6938 4.5366C18.7886 4.49737 18.8696 4.43091 18.9266 4.34564C18.9836 4.26037 19.014 4.16011 19.0141 4.05754C19.0139 3.92004 18.9593 3.78821 18.8621 3.69096C18.7649 3.59371 18.6331 3.539 18.4956 3.53881Z"
                          fill="#231F20"
                        />
                        <path
                          d="M18.2812 3.7042H18.5368C18.5618 3.70152 18.5871 3.70451 18.6107 3.71294C18.6344 3.72137 18.6558 3.73502 18.6735 3.75289C18.6911 3.77075 18.7045 3.79237 18.7127 3.81612C18.7208 3.83988 18.7235 3.86517 18.7206 3.89011C18.7206 3.9841 18.6789 4.05629 18.6001 4.06857V4.06995C18.6718 4.07729 18.7095 4.11688 18.7132 4.21868C18.7146 4.26458 18.7153 4.3215 18.7175 4.3658C18.7175 4.37827 18.7207 4.39053 18.7267 4.40146C18.7327 4.41239 18.7414 4.42163 18.7519 4.42835H18.6212C18.6087 4.40921 18.6019 4.38692 18.6017 4.36408C18.5976 4.32081 18.5987 4.27996 18.5967 4.2274C18.5948 4.14844 18.5706 4.11378 18.4913 4.11378H18.3967V4.42823H18.2812V3.7042ZM18.4892 4.02668C18.5049 4.02811 18.5207 4.02604 18.5355 4.02062C18.5503 4.0152 18.5637 4.00656 18.5748 3.99533C18.5858 3.9841 18.5942 3.97056 18.5994 3.95568C18.6046 3.94079 18.6064 3.92495 18.6048 3.90928C18.6048 3.83204 18.5715 3.79142 18.4953 3.79142H18.3967V4.02668H18.4892Z"
                          fill="#231F20"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <hr style={{ color: "#80B32F" }} />
          <Row>
            <Col lg={4}>
              <div className="bottom-wrapper">
                <div className="bill-features-wrapper">
                  <p className="sms">Delivery</p>
                  <div className="order-wrap p-3">
                    <div className="order-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          d="M6.16726 18.0583C6.91892 17.2516 8.06476 17.3158 8.72476 18.1958L9.65059 19.4333C10.3931 20.4141 11.5939 20.4141 12.3364 19.4333L13.2623 18.1958C13.9223 17.3158 15.0681 17.2516 15.8198 18.0583C17.4514 19.8 18.7806 19.2225 18.7806 16.7841V6.45331C18.7806 2.75915 17.9189 1.83331 14.4539 1.83331H7.52393C4.05893 1.83331 3.19727 2.75915 3.19727 6.45331V16.775C3.20643 19.2225 4.54476 19.7908 6.16726 18.0583Z"
                          stroke="#05422C"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.47852 9.16669H13.5202"
                          stroke="#05422C"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="order-time">
                      <p>
                        Order by 10pm for free next day delivery on Orders overs
                        $100
                      </p>
                    </div>
                    <div className="order-day">
                      <p>We deliver Monday to Saturday - excluding Holidays</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="bottom-wrapper">
                <div className="bill-features-wrapper ">
                  <div className="order-wrap p-3 gap-fix">
                    <div className="order-icon ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="22"
                        viewBox="0 0 23 22"
                        fill="none"
                      >
                        <path
                          d="M3.57227 6.82001L11.6664 11.5042L19.7056 6.84748"
                          stroke="#05422C"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.666 19.8092V11.495"
                          stroke="#05422C"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M20.4757 8.40582V13.5942C20.4757 13.64 20.4757 13.6766 20.4666 13.7225C19.8249 13.1633 18.9999 12.8333 18.0832 12.8333C17.2216 12.8333 16.4241 13.1358 15.7916 13.64C14.9482 14.3092 14.4166 15.345 14.4166 16.5C14.4166 17.1875 14.6091 17.8383 14.9482 18.3883C15.0307 18.535 15.1316 18.6725 15.2416 18.8008L13.5641 19.7267C12.5191 20.3133 10.8141 20.3133 9.76907 19.7267L4.87407 17.0133C3.76491 16.3992 2.85742 14.8592 2.85742 13.5942V8.40582C2.85742 7.14082 3.76491 5.60083 4.87407 4.98667L9.76907 2.27331C10.8141 1.68665 12.5191 1.68665 13.5641 2.27331L18.4591 4.98667C19.5682 5.60083 20.4757 7.14082 20.4757 8.40582Z"
                          stroke="#05422C"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M21.7493 16.5C21.7493 17.6 21.2635 18.5808 20.5027 19.25C19.8519 19.8183 19.0085 20.1666 18.0827 20.1666C16.0568 20.1666 14.416 18.5258 14.416 16.5C14.416 15.345 14.9477 14.3092 15.791 13.64C16.4235 13.1358 17.221 12.8333 18.0827 12.8333C20.1085 12.8333 21.7493 14.4741 21.7493 16.5Z"
                          stroke="#05422C"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18.3118 15.3541V16.7291L17.166 17.4166"
                          stroke="#05422C"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="order-time">
                      <p>Free next day delivery to stores.</p>
                    </div>
                    <div className="order-day">
                      <p>
                        Home delivery is $4.99 for orders under $100 and is FREE
                        for all orders over $100
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="bottom-wrapper">
                <div className="bill-features-wrapper">
                  <p className="sms">Free Returns</p>
                  <div className="order-wrap p-3">
                    <div className="order-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="22"
                        viewBox="0 0 23 22"
                        fill="none"
                      >
                        <path
                          d="M14.0846 1.83331V11C14.0846 12.0083 13.2596 12.8333 12.2513 12.8333H2.16797V6.98498C2.83714 7.78248 3.86383 8.27748 5.00049 8.24998C5.92633 8.23165 6.76047 7.87415 7.3838 7.27832C7.66797 7.03998 7.90632 6.73747 8.08966 6.40747C8.41966 5.8483 8.60297 5.18829 8.58464 4.50079C8.55714 3.42829 8.08048 2.48415 7.33798 1.83331H14.0846Z"
                          stroke="#05422C"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M20.5013 12.8333V15.5833C20.5013 17.105 19.273 18.3333 17.7513 18.3333H16.8346C16.8346 17.325 16.0096 16.5 15.0013 16.5C13.993 16.5 13.168 17.325 13.168 18.3333H9.5013C9.5013 17.325 8.6763 16.5 7.66797 16.5C6.65964 16.5 5.83464 17.325 5.83464 18.3333H4.91797C3.3963 18.3333 2.16797 17.105 2.16797 15.5833V12.8333H12.2513C13.2596 12.8333 14.0846 12.0083 14.0846 11V4.58331H15.7713C16.4313 4.58331 17.0363 4.94082 17.3663 5.50916L18.9338 8.24998H17.7513C17.2471 8.24998 16.8346 8.66248 16.8346 9.16665V11.9166C16.8346 12.4208 17.2471 12.8333 17.7513 12.8333H20.5013Z"
                          stroke="#05422C"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.66732 20.1667C8.67984 20.1667 9.50065 19.3459 9.50065 18.3333C9.50065 17.3208 8.67984 16.5 7.66732 16.5C6.6548 16.5 5.83398 17.3208 5.83398 18.3333C5.83398 19.3459 6.6548 20.1667 7.66732 20.1667Z"
                          stroke="#05422C"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.0013 20.1667C16.0138 20.1667 16.8346 19.3459 16.8346 18.3333C16.8346 17.3208 16.0138 16.5 15.0013 16.5C13.9888 16.5 13.168 17.3208 13.168 18.3333C13.168 19.3459 13.9888 20.1667 15.0013 20.1667Z"
                          stroke="#05422C"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M20.5007 11V12.8333H17.7507C17.2465 12.8333 16.834 12.4208 16.834 11.9167V9.16667C16.834 8.6625 17.2465 8.25 17.7507 8.25H18.9331L20.5007 11Z"
                          stroke="#05422C"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.58333 4.58335C8.58333 5.68335 8.09751 6.66419 7.33668 7.33335C6.68585 7.90169 5.8425 8.25002 4.91667 8.25002C2.89083 8.25002 1.25 6.60919 1.25 4.58335C1.25 3.42835 1.78167 2.39252 2.625 1.72336C3.2575 1.21919 4.055 0.916687 4.91667 0.916687C6.9425 0.916687 8.58333 2.55752 8.58333 4.58335Z"
                          stroke="#05422C"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5.14583 3.4375V4.8125L4 5.5"
                          stroke="#05422C"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="order-time">
                      <p>30 days to return it to us for a refund.</p>
                    </div>
                    <div className="order-day">
                      <p>
                        We have made returns SO EASY - you can now return your
                        order to a store or send it with FedEx FOR FREE
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default BillingShipping;
