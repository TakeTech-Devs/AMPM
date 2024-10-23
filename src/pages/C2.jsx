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

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { error } = useSelector((state) => state.newOrder);

  const [firstName, setFirstName] = useState(shippingInfo.firstName || "");
  const [lastName, setLastName] = useState(shippingInfo.lastName || "");
  const [country, setCountry] = useState(shippingInfo.country || "");
  const [address, setAddress] = useState(shippingInfo.address || "");
  const [city, setCity] = useState(shippingInfo.city || "");
  const [state, setState] = useState(shippingInfo.state || "");
  const [pin, setPin] = useState(shippingInfo.pin || "");
  const [phone, setPhone] = useState(shippingInfo.phone || "");
  const [email, setEmail] = useState(shippingInfo.email || "");

  const [isAddressSubmitted, setIsAddressSubmitted] = useState(false);

  const changeHandler = (value) => {
    setCountry(value);
  };

  const navigate = useNavigate();

  const shippingSubmit = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingInfo({
        firstName,
        lastName,
        country,
        address,
        city,
        state,
        pin,
        phone,
        email,
      })
    );
    setIsAddressSubmitted(true); // Mark that the address was submitted
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    const order = {
      shippingInfo,
      orderItems: cartItems,
      totalPrice: total,
    };
    dispatch(createOrder(order));
    window.alert("Order Placed Successfully");
    navigate("/ordercomplete", {
      state: { Total: total, Fdiscount: Discount, fromCheckout: true },
    });
  };

  const calculateShippingCost = () => {
    return total >= 100 ? 0 : 50;
  };

  const finalTotal = total + calculateShippingCost() - Discount;

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
      window.alert(error);
    }
  }, [dispatch, error]);

  return (
    <>
      <section className="billing-mt">
        <Container>
          <div className="navigation billing-nav">
            <Nav.Link href="/">
              <h3>
                Home <span>/</span>
              </h3>
            </Nav.Link>
            <Nav className="me-auto align-items-center">
              <Nav.Link className="signup" href="/contactus">
                Cart
              </Nav.Link>
            </Nav>
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
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Enter Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={12}>
                        <Form.Group className="mb-3" controlId="formBasicCountry">
                          <Form.Label>Country / Region</Form.Label>
                          <Form.Control
                            as="select"
                            required
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
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
                        <Form.Group className="mb-3" controlId="formBasicAddress">
                          <Form.Label>Address</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="House number and street name"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={12}>
                        <Form.Group className="mb-3" controlId="formBasicCity">
                          <Form.Label>Town / City</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Enter Town / City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group className="mb-3" controlId="formBasicState">
                          <Form.Label>State / Province</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Enter Province"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group className="mb-3" controlId="formBasicZip">
                          <Form.Label>Postcode / ZIP</Form.Label>
                          <Form.Control
                            required
                            type="number"
                            placeholder="Enter Postcode / ZIP"
                            value={pin}
                            onChange={(e) => setPin(e.target.value)}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={12}>
                        <Button type="submit" className="primary w-100">
                          Submit
                        </Button>
                      </Col>
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
                    <p>
                      {isAddressSubmitted
                        ? `${firstName} ${lastName}, ${city}, ${state}, ${country}`
                        : "New York, US"}
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="sms">Discount</p>
                    <p>${Discount.toFixed(2)}</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="sms">Shipping Costs</p>
                    <p>${calculateShippingCost().toFixed(2)}</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="sms">Total</p>
                    <p>${finalTotal.toFixed(2)}</p>
                  </div>
                  <Button className="primary" onClick={handleCheckout}>
                    Proceed to Payment
                  </Button>
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
