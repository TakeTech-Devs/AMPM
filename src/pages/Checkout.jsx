import React, { useEffect, useState } from "react";
import { Button, Col, Container, Nav, Row, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/PaymentDetails.scss";
import countryList from "react-select-country-list";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingInfo } from "../actions/cartAction";
import { clearErrors, createOrder } from "../actions/orderAction";

function Checkout() {
  const options = countryList().getData();
  const location = useLocation();
  const dispatch = useDispatch();
  const { total } = location.state || { total: 0 };
  const { Discount } = location.state || { Discount: 0 };
  const { totalFinal } = location.state || { totalFinal: 0 };
  const { couponCode } = location.state || { couponCode: "null" }
  // console.log(totalFinal);

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { error } = useSelector((state) => state.newOrder);

  const [firstName, setFirstName] = useState(shippingInfo.firstName);
  const [lastName, setLastName] = useState(shippingInfo.lastName);
  const [country, setCountry] = useState(shippingInfo.country);
  const [address, setAddress] = useState(shippingInfo.address);
  const [city, setCity] = useState(shippingInfo.city);
  const [state, setState] = useState(shippingInfo.state);
  const [pin, setPin] = useState(shippingInfo.pin);
  const [phone, setPhone] = useState(shippingInfo.phone);
  const [email, setEmail] = useState(shippingInfo.email);
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);

  const [isAddressSubmitted, setIsAddressSubmitted] = useState(false);

  const changeHandler = (value) => {
    setCountry(value);
  };

  // const customStyles = {
  //   control: (provided, state) => ({
  //     ...provided,
  //     border: "0.6px solid #282828",
  //     borderRadius: "6px",
  //     width: "100%",
  //     height: "59px",
  //     paddingLeft: "10px",
  //     boxShadow: state.isFocused ? "none" : provided.boxShadow,
  //     "&:hover": {
  //       borderColor: "#282828",
  //     },
  //   }),
  //   dropdownIndicator: (provided) => ({
  //     ...provided,
  //     paddingRight: "20px",
  //   }),
  // };

  const navigate = useNavigate();

  useEffect(() => {
    const addresses = JSON.parse(localStorage.getItem("addresses")) || [];
    setSavedAddresses(addresses);
  }, []);

  const shippingSubmit = (e) => {
    e.preventDefault();

    const newAddress = {
      firstName,
      lastName,
      country,
      address,
      city,
      state,
      pin,
      phone,
      email,
    };

    // Dispatch the action
    dispatch(saveShippingInfo(newAddress));

    // Optional: Update local state if you need to display saved addresses dynamically
    setSavedAddresses((prev) => [...prev, newAddress]);
    window.location.reload();
  };

  const handleAddressSelect = (index) => {
    setSelectedAddressIndex(index);
    // dispatch(saveShippingInfo(savedAddresses[index]));
  };

  const handleDeleteAddress = (index) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this address?"
    );
    if (!confirmDelete) return;

    // Remove the address from savedAddresses
    const updatedAddresses = savedAddresses.filter((_, i) => i !== index);

    // Update the state
    setSavedAddresses(updatedAddresses);

    // Remove the shippingAddresses key from localStorage
    window.localStorage.removeItem("shippingInfo");

    // Update localStorage with the new array
    localStorage.setItem("shippingInfo", JSON.stringify(updatedAddresses));

    console.log("Updated Addresses:", updatedAddresses);
    console.log(
      "LocalStorage after deletion:",
      localStorage.getItem("shippingInfo")
    );

    // Reset selected address if needed
    if (selectedAddressIndex === index) {
      setSelectedAddressIndex(null);
    }
  };

  const totalPrice = total;

  const handleCheckout = (e) => {
    e.preventDefault();

    if (selectedAddressIndex === null) {
      window.alert("Please select a shipping address.");
      return;
    }

    const shippingInfo = savedAddresses[selectedAddressIndex];

    console.log("Address", shippingInfo);

    const order = {
      shippingInfo,
      orderItems: cartItems,
      totalPrice: total,
      couponCode
    };
    const finalAmount = totalFinal;
    console.log("Order:", order);
    dispatch(createOrder(order));
    window.alert("Order Placed Successfully");
    navigate("/ordercomplete", {
      state: {
        Total: total,
        Fdiscount: Discount,
        totalFinalAmount: finalAmount,
        address: shippingInfo,
        fromCheckout: true,
        
      },
    });
  };

  const calculateShippingCost = (total) => {
    return total >= 100 ? 0 : 50;
  };

  // const finalTotal = total - Discount + calculateShippingCost(total);

  useEffect(() => {
    const addressesFromStorage =
      JSON.parse(localStorage.getItem("shippingInfo")) || [];
    setSavedAddresses(addressesFromStorage);
    if (error) {
      dispatch(clearErrors());
      window.alert(error);
    }
  }, [dispatch, error]);

  const [shipToDifferentAddress, setShipToDifferentAddress] = useState(false);
  const toggleShippingAddress = () => {
    setShipToDifferentAddress(!shipToDifferentAddress);
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
              <Nav.Link className="signup " href="/contactus">
                Cart
              </Nav.Link>
            </Nav>
          </div>
        </Container>
      </section>

      <section className="bg-color bill-order-lifecycle override-checkout">
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
            <div className="d-flex align-items-center checkout">
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
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.3547 4.1125C10.2147 4.08916 10.0688 4.08334 9.91716 4.08334H4.08383C3.92049 4.08334 3.76299 4.095 3.61133 4.11834C3.69299 3.955 3.80966 3.80334 3.94966 3.66334L5.84549 1.76166C6.64466 0.968331 7.93966 0.968331 8.73883 1.76166L9.75966 2.79418C10.133 3.16168 10.3313 3.62833 10.3547 4.1125Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.8327 7.29166H11.0827C10.441 7.29166 9.91602 7.81666 9.91602 8.45833C9.91602 9.1 10.441 9.625 11.0827 9.625H12.8327"
                    stroke="white"
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
                  <h3>Shipping</h3>
                  <p>({cartItems.length})</p>
                </div>
                <div className="buyer-info">
                  <Form onSubmit={shippingSubmit}>
                    <Row>
                      <Col lg={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Enter Your Name"
                            className="custom-outline"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Enter Last Name"
                            className="custom-outline"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={12}>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword "
                        >
                          <Form.Label>Country / Region</Form.Label>
                          {/* <Select
                            required
                            components={{ IndicatorSeparator: () => null }}
                            styles={customStyles}
                            options={options}
                            value={country}
                            onChange={changeHandler}
                            placeholder="Select a Country"
                            classNamePrefix="custom-outline"
                          /> */}
                          <Form.Control
                            as="select" // This makes the input a dropdown
                            required
                            className="custom-outline"
                            value={country} // Bind the state value to the select input
                            onChange={(e) => setCountry(e.target.value)} // Update the state on selection
                          >
                            <option value="">Select a Country</option>
                            {options.map((option, index) => (
                              <option key={index} value={option.label}>
                                {option.label}
                              </option>
                            ))}
                          </Form.Control>
                        </Form.Group>
                      </Col>
                      <Col lg={12}>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Address</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="House number and street name"
                            className="custom-outline"
                            value={address}
                            onChange={(e) => {
                              // Automatically add space after comma
                              const updatedAddress = e.target.value.replace(
                                /,([^ ])/g,
                                ", $1"
                              );
                              setAddress(updatedAddress);
                            }}
                          />
                        </Form.Group>
                      </Col>

                      <Col lg={12}>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Control
                            type="Text"
                            placeholder="Apartment, suite, unit, etc. (optional)"
                            className="custom-outline"
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={4}>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Town / City</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Enter Town / City"
                            className="custom-outline"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={4}>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>State / Province</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Enter Province"
                            className="custom-outline"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={4}>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Postcode / ZIP </Form.Label>
                          <Form.Control
                            required
                            type="number"
                            placeholder="Enter Postcode / ZIP"
                            className="custom-outline"
                            onInput={(e) => {
                              if (e.target.value.length > 6) {
                                e.target.value = e.target.value.slice(0, 6);
                              }
                            }}
                            onWheel={(e) => e.target.blur()}
                            value={pin}
                            onChange={(e) => setPin(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Phone</Form.Label>
                          <Form.Control
                            required
                            type="number"
                            placeholder="Enter Number"
                            className="custom-outline"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            required
                            type="email"
                            placeholder="johndoe@example.com"
                            className="custom-outline"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                      {/* <Col lg={12}>
                        <Button type="submit" className="primary w-100">
                          Submit
                        </Button>
                      </Col> */}
                      <Col lg={12}>
                        <Button type="submit" className="primary w-100">
                          Add Address
                        </Button>
                      </Col>
                      {savedAddresses.length > 0 && (
                        <div className="saved-addresses">
                          <h4>Saved Addresses</h4>
                          {savedAddresses.map((address, index) => (
                            <div key={index} className="address-card">
                              <Form.Check
                                type="radio"
                                label={`${address.firstName} ${address.lastName}, ${address.address}, ${address.city}, ${address.state}, ${address.pin}, ${address.phone}, ${address.email}`}
                                checked={selectedAddressIndex === index}
                                onChange={() => handleAddressSelect(index)}
                              />
                              <button
                                className="btn btn-danger"
                                style={{marginLeft: "22px",marginTop: "5px"}}
                                onClick={() => handleDeleteAddress(index)}
                              >
                                Delete Address
                              </button>
                              
                            </div>
                          ))}
                        </div>
                      )}

                      {/* <Col lg={12}>
                        <div className="bottom-info">
                          <p className="label-effect">
                            What would you like us to do if an Item is out of
                            Stock?
                          </p>

                          <div className="input-field">
                            <Form.Select
                              className="custom-select-outline"
                              aria-label="Default select example"
                            >
                              <option>Contact me (With delay)</option>
                              <option value="1">Contact me (With delay)</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </div>
                        </div>
                      </Col>
                      <Col lg={12}>
                        <div className="bottom-info">
                          <p className="label-effect">
                            Where did you hear About Us?
                          </p>

                          <div className="input-field">
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlTextarea1"
                            >
                              <Form.Control
                                className="contact-outline-textarea if-outline additional"
                                as="textarea"
                                rows={3}
                                placeholder="Notes about your order, e.g. special notes for delivery."
                              />
                            </Form.Group>
                          </div>
                        </div>
                      </Col>
                      <Col lg={12}>
                        <Button type="submit" className="primary w-100">
                          Submit
                        </Button>
                      </Col> */}
                    </Row>
                  </Form>
                </div>
              </div>
            </Col>
            <Col lg={5}>
              <div className="right-bill">
                <div className="amount-display d-flex flex-column gap-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="sms">Subtotal</p>
                    <p>${total}</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="sms">Shipping</p>
                    {selectedAddressIndex !== null &&
                      savedAddresses[selectedAddressIndex] && (
                        <p style={{ width: "250px", textAlign: "end" }}>
                          {[
                            savedAddresses[selectedAddressIndex].address,
                            savedAddresses[selectedAddressIndex].city,
                            savedAddresses[selectedAddressIndex].state,
                            savedAddresses[selectedAddressIndex].pin,
                            savedAddresses[selectedAddressIndex].country,
                          ]
                            .filter((item) => item) // Filter out any empty or undefined fields
                            .join(", ")}{" "}
                          {/* Join with a comma and space */}
                        </p>
                      )}
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <p className="sms">Discount</p>
                    {/* {Discount !== null && Discount !== undefined ? (
                      <p>${Discount.toFixed(2)}</p>
                    ) : (
                      <p>$0.00</p>
                    )} */}
                    <p>${(Discount ?? 0).toFixed(2)}</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="sms">Coupon</p>
                    <p>{couponCode}</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="sms">Shipping Costs</p>
                    <p>${calculateShippingCost(total).toFixed(2)}</p>
                  </div>
                </div>

                {/* <div className="money-trans">
                  <p>Email Money Transfer</p>
                  <div className="svg-icon">
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
                </div> */}

                {/* <div className="apply-coupon-wrapper checkout-apply-coupon-wrapper">
                  <Form>
                    <div className="d-flex gap-3 coupon-wrapper">
                      <Form.Control
                        className="custom-outline coupon-box"
                        type="text"
                        placeholder="Coupon code"
                      />
                      <Button
                        className="apply-btn"
                        variant="primary"
                        type="submit"
                      >
                        Apply Coupon
                      </Button>
                    </div>
                  </Form>
                </div> */}
                {/* <div className="checkboxes-wrapper">
                  <Form>
                    <div className="final-sms">
                      <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check
                          type="checkbox"
                          label="I confirm that my address is 100% correct and WILL NOT hold Top Shelf BC liable if this shipment is sent to an incorrect address."
                        />
                      </Form.Group>
                    </div>
                    <div className="final-sms optional">
                      <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check
                          type="checkbox"
                          label="Sign me up to receive email updates and news (optional)"
                        />
                      </Form.Group>
                    </div>
                  </Form>
                </div> */}
                <div className="checkout-btn">
                  <Button
                    className="d-flex justify-content-center gap-2 add-to-cart-btn-color"
                    onClick={handleCheckout}
                  >
                    {" "}
                    <span>Place Order</span> <span>|</span>{" "}
                    <span>${parseFloat(totalFinal || 0).toFixed(2)}</span>{" "}
                  </Button>
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
        </Container>
      </section>
    </>
  );
}

export default Checkout;
