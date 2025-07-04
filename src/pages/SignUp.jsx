import { Col, Container, Row, Form, Nav, Button } from "react-bootstrap";
import "../styles/SignUp.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, consumarRegister, resellerRegister } from "../actions/userActions";



export default function SignUp() {

  const dispatch = useDispatch();
  const [activeForm, setActiveForm] = useState("consumer");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({
    passwordMismatch: false,
    invalidPhone: false,
  });

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const navigate = useNavigate();

  const { error, loading, isAuthenticated } = useSelector((state) => state.user);

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    suburb: "",
    state: "",
    pinCode: "",
    password: "",
  })

  const { firstName, lastName, email, phone, address, suburb, state, pinCode, password } = user;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrors((prev) => ({ ...prev, passwordMismatch: true }));
      return;
    } else {
      setErrors((prev) => ({ ...prev, passwordMismatch: false }));
    }

    if (!validatePhone(phone)) {
      setErrors((prev) => ({ ...prev, invalidPhone: true }));
      return;
    } else {
      setErrors((prev) => ({ ...prev, invalidPhone: false }));
      // window.alert("Registered successfully");
      // navigate("/login");
    }

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("suburb", suburb);
    formData.append("state", state);
    formData.append("pinCode", pinCode);
    formData.append("password", password);

    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    dispatch(consumarRegister(formData));

    window.alert("Successfully Created Account");
    navigate('/login')
    window.location.reload()

  };

  const handleDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }


  const [reseller, setReseller] = useState({
    fullName: "",
    businessName: "",
    businessType: "",
    abn: "",
    businessEmail: "",
    businessWebsite: "",
    businessPassword: "",
  })

  const { fullName, businessName, businessType, abn, businessEmail, businessWebsite, businessPassword } = reseller;


  const handleSubmitReseller = (e) => {
    e.preventDefault();
    if (businessPassword !== confirmPassword) {
      setErrors((prev) => ({ ...prev, passwordMismatch: true }));
      return;
    } else {
      setErrors((prev) => ({ ...prev, passwordMismatch: false }));
    }

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("businessName", businessName);
    formData.append("businessType", businessType);
    formData.append("abn", abn);
    formData.append("businessEmail", businessEmail);
    formData.append("businessWebsite", businessWebsite);
    formData.append("businessPassword", businessPassword);

    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    dispatch(resellerRegister(formData));

    window.alert("Applied successfully, Wait for 48 hours for approval");
    navigate("/");

  };

  const resellerHandleDataChange = (e) => {
    setReseller({ ...reseller, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if (error) {
      window.alert(error)
      dispatch(clearErrors());
    }
    // if (isAuthenticated) {
    //   window.alert("Successfully Created Account");
    //   navigate('/login')
    // }
  }, [dispatch, error]);

  return (
    <>
      <section className="sign-sec">
        <div className="navigation">
          <Nav className="me-auto align-items-center">
            <Nav.Link className="signup text-black pe-0" href="/">
              Home
            </Nav.Link>
            <span>/</span>
            <Nav.Link className="signup ps-2" href="/signup">
              Sign Up
            </Nav.Link>
            <p className="or">Or</p>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </div>
        <Container>
          {activeForm === "consumer" && (
            <Row className="align-items-center justify-content-center">
              <Col sm={12}>
                <div className="login-from">
                  <Form onSubmit={handleSubmit}>
                    <h2 className="text-black">Welcome !</h2>

                    <Nav className="me-auto align-items-center">
                      <Nav.Link className="active" href="/signup">
                        Sign Up
                      </Nav.Link>
                      <h3 className="text-black">Or</h3>
                      <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>

                    <Nav className="me-auto sec-nav">
                      <h3 className="text-black">Are You a :</h3>
                      <div className="types">
                        <Nav.Link
                          className={activeForm === "consumer" ? "active" : ""}
                          onClick={() => setActiveForm("consumer")}
                        >
                          Consumer
                        </Nav.Link>
                        <h3 className="text-black">Or</h3>
                        <Nav.Link
                          className={activeForm === "reseller" ? "active" : ""}
                          onClick={() => setActiveForm("reseller")}
                        >
                          Reseller
                        </Nav.Link>
                      </div>
                    </Nav>

                    <Row>
                      <Col lg={6}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>First Name</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Enter First Name"
                            className="custom-outline"
                            name="firstName"
                            value={firstName}
                            onChange={handleDataChange}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Enter your Last Name"
                            className="custom-outline"
                            name="lastName"
                            value={lastName}
                            onChange={handleDataChange}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            required
                            type="email"
                            placeholder="Enter your email"
                            className="custom-outline"
                            name="email"
                            value={email}
                            onChange={handleDataChange}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group
                          required
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label>Phone</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Enter your Phone"
                            maxLength={10}
                            className={`custom-outline ${errors.invalidPhone ? "is-invalid" : ""
                              }`}
                            // value={phone}
                            // onChange={(e) => setPhone(e.target.value)}
                            name="phone"
                            value={phone}
                            onChange={handleDataChange}
                          />
                          {errors.invalidPhone && (
                            <div className="invalid-feedback">
                              Please enter a valid phone number.
                            </div>
                          )}
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label>Address</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Enter your Address"
                            className="custom-outline"
                            name="address"
                            value={address}
                            onChange={handleDataChange}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label>Suburb</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Enter your Suburb"
                            className="custom-outline"
                            name="suburb"
                            value={suburb}
                            onChange={handleDataChange}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label>State</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Enter your user State"
                            className="custom-outline"
                            name="state"
                            value={state}
                            onChange={handleDataChange}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label>Post Code</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Enter your Post Code"
                            className="custom-outline"
                            name="pinCode"
                            value={pinCode}
                            onChange={handleDataChange}
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label>Password</Form.Label>
                          <div className="pass-eye-wrapper">
                            <Form.Control
                              required
                              type={showPassword ? "text" : "password"}
                              minLength={6}
                              maxLength={12}
                              placeholder="Enter your Password"
                              className="custom-outline"
                              name="password"
                              value={password}
                              onChange={handleDataChange}
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                            />
                            <div
                              className="eye-wrapper"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="18"
                                  viewBox="0 0 20 18"
                                  fill="none"
                                >
                                  <path
                                    d="M19.25 6.14999C16.94 2.51999 13.56 0.429993 10 0.429993C8.22 0.429993 6.49 0.949993 4.91 1.91999C3.33 2.89999 1.91 4.32999 0.75 6.14999C-0.25 7.71999 -0.25 10.27 0.75 11.84C3.06 15.48 6.44 17.56 10 17.56C11.78 17.56 13.51 17.04 15.09 16.07C16.67 15.09 18.09 13.66 19.25 11.84C20.25 10.28 20.25 7.71999 19.25 6.14999ZM10 13.04C7.76 13.04 5.96 11.23 5.96 8.99999C5.96 6.76999 7.76 4.95999 10 4.95999C12.24 4.95999 14.04 6.76999 14.04 8.99999C14.04 11.23 12.24 13.04 10 13.04Z"
                                    fill="#010101"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="21"
                                  height="19"
                                  viewBox="0 0 21 19"
                                  fill="none"
                                >
                                  <path
                                    d="M10.3398 6.17417L13.346 9.1803L13.3603 9.02284C13.3603 7.44341 12.0767 6.15985 10.4973 6.15985L10.3398 6.17417Z"
                                    fill="black"
                                  />
                                  <path
                                    d="M10.4973 4.25122C13.1312 4.25122 15.2689 6.38894 15.2689 9.02288C15.2689 9.63842 15.1449 10.2253 14.9302 10.7645L17.7216 13.5559C19.1626 12.3535 20.2983 10.7979 20.9997 9.02288C19.344 4.83339 15.2737 1.86542 10.4973 1.86542C9.16125 1.86542 7.88248 2.10398 6.69434 2.53343L8.75569 4.59C9.29482 4.38006 9.88174 4.25122 10.4973 4.25122Z"
                                    fill="black"
                                  />
                                  <path
                                    d="M0.954313 1.65067L3.13018 3.82654L3.56442 4.26077C1.98977 5.49186 0.744376 7.12854 0 9.02286C1.651 13.2123 5.72597 16.1803 10.4976 16.1803C11.9769 16.1803 13.3892 15.894 14.6824 15.3739L15.088 15.7795L17.8699 18.5661L19.0866 17.3541L2.17108 0.433899L0.954313 1.65067ZM6.23178 6.92335L7.70622 8.3978C7.67113 8.58148 7.65259 8.76468 7.65259 8.95863C7.65259 10.5381 8.93616 11.8217 10.5156 11.8217C10.7096 11.8217 10.8928 11.8031 11.0765 11.768L12.5484 13.2399C11.9485 13.4533 11.2392 13.5677 10.4836 13.5677C7.84966 13.5677 5.71194 11.4299 5.71194 8.796C5.71194 8.04042 5.82632 7.33107 6.03975 6.73112L6.23178 6.92335Z"
                                    fill="black"
                                  />
                                </svg>
                              )}
                            </div>
                          </div>
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label>Confirm Password</Form.Label>
                          <div className="pass-eye-wrapper">
                            <Form.Control
                              required
                              type={showConfirmPassword ? "text" : "password"}
                              minLength={6}
                              maxLength={12}
                              placeholder="Confirm your Password"
                              className={`custom-outline ${errors.passwordMismatch ? "is-invalid" : ""
                                }`}
                              value={confirmPassword}
                              onChange={(e) =>
                                setConfirmPassword(e.target.value)
                              }
                            />
                            <div
                              className="eye-wrapper"
                              onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                              }
                            >
                              {showConfirmPassword ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="18"
                                  viewBox="0 0 20 18"
                                  fill="none"
                                >
                                  <path
                                    d="M19.25 6.14999C16.94 2.51999 13.56 0.429993 10 0.429993C8.22 0.429993 6.49 0.949993 4.91 1.91999C3.33 2.89999 1.91 4.32999 0.75 6.14999C-0.25 7.71999 -0.25 10.27 0.75 11.84C3.06 15.48 6.44 17.56 10 17.56C11.78 17.56 13.51 17.04 15.09 16.07C16.67 15.09 18.09 13.66 19.25 11.84C20.25 10.28 20.25 7.71999 19.25 6.14999ZM10 13.04C7.76 13.04 5.96 11.23 5.96 8.99999C5.96 6.76999 7.76 4.95999 10 4.95999C12.24 4.95999 14.04 6.76999 14.04 8.99999C14.04 11.23 12.24 13.04 10 13.04Z"
                                    fill="#010101"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="21"
                                  height="19"
                                  viewBox="0 0 21 19"
                                  fill="none"
                                >
                                  <path
                                    d="M10.3398 6.17417L13.346 9.1803L13.3603 9.02284C13.3603 7.44341 12.0767 6.15985 10.4973 6.15985L10.3398 6.17417Z"
                                    fill="black"
                                  />
                                  <path
                                    d="M10.4973 4.25122C13.1312 4.25122 15.2689 6.38894 15.2689 9.02288C15.2689 9.63842 15.1449 10.2253 14.9302 10.7645L17.7216 13.5559C19.1626 12.3535 20.2983 10.7979 20.9997 9.02288C19.344 4.83339 15.2737 1.86542 10.4973 1.86542C9.16125 1.86542 7.88248 2.10398 6.69434 2.53343L8.75569 4.59C9.29482 4.38006 9.88174 4.25122 10.4973 4.25122Z"
                                    fill="black"
                                  />
                                  <path
                                    d="M0.954313 1.65067L3.13018 3.82654L3.56442 4.26077C1.98977 5.49186 0.744376 7.12854 0 9.02286C1.651 13.2123 5.72597 16.1803 10.4976 16.1803C11.9769 16.1803 13.3892 15.894 14.6824 15.3739L15.088 15.7795L17.8699 18.5661L19.0866 17.3541L2.17108 0.433899L0.954313 1.65067ZM6.23178 6.92335L7.70622 8.3978C7.67113 8.58148 7.65259 8.76468 7.65259 8.95863C7.65259 10.5381 8.93616 11.8217 10.5156 11.8217C10.7096 11.8217 10.8928 11.8031 11.0765 11.768L12.5484 13.2399C11.9485 13.4533 11.2392 13.5677 10.4836 13.5677C7.84966 13.5677 5.71194 11.4299 5.71194 8.796C5.71194 8.04042 5.82632 7.33107 6.03975 6.73112L6.23178 6.92335Z"
                                    fill="black"
                                  />
                                </svg>
                              )}
                            </div>
                            {errors.passwordMismatch && (
                              <div className="invalid-feedback">
                                Passwords do not match.
                              </div>
                            )}
                          </div>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Button className="primary login-btn" type="submit">
                      Register
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>
          )}

          {/* Reseller SignUp */}

          {activeForm === "reseller" && (
            <div className="reseller">
              <Row className="align-items-center">
                <Col sm={12}>
                  <div className="login-from">
                    <Form onSubmit={handleSubmitReseller}>
                      <h2 className="text-black">Welcome !</h2>

                      <Nav className="me-auto align-items-center">
                        <Nav.Link className="active" href="/signup">
                          Sign Up
                        </Nav.Link>
                        <h3 className="text-black">Or</h3>
                        <Nav.Link href="/login">Login</Nav.Link>
                      </Nav>

                      <Nav className="me-auto  sec-nav">
                        <h3 className="text-black">Are You a :</h3>
                        <div className="types">
                          <Nav.Link
                            className={
                              activeForm === "consumer" ? "active" : ""
                            }
                            onClick={() => setActiveForm("consumer")}
                          >
                            Consumer
                          </Nav.Link>
                          <h3 className="text-black">Or</h3>
                          <Nav.Link
                            className={
                              activeForm === "reseller" ? "active" : ""
                            }
                            onClick={() => setActiveForm("reseller")}
                          >
                            Reseller
                          </Nav.Link>
                        </div>
                      </Nav>

                      <Row>
                        <Col lg={6}>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder="Enter Full Name"
                              className="custom-outline"
                              name="fullName"
                              value={fullName}
                              onChange={resellerHandleDataChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col lg={6}>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                          >
                            <Form.Label>Business Name</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder="Enter your Business Name"
                              className="custom-outline"
                              name="businessName"
                              value={businessName}
                              onChange={resellerHandleDataChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col lg={6}>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                          >
                            <Form.Label>Select</Form.Label>
                            <Form.Select
                              className="custom-select-outline"
                              aria-label="Default select example "
                              name="businessType"
                              value={businessType}
                              onChange={resellerHandleDataChange}
                            >
                              <option>
                                Enter your Company/trust/ sole trader
                              </option>
                              <option value="Company">Company</option>
                              <option value="Trust">Trust</option>
                              <option value="Sole Trader">Sole Trader</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col lg={6}>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                          >
                            <Form.Label>ABN</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder="Enter your ABN"
                              className="custom-outline"
                              name="abn"
                              value={abn}
                              onChange={resellerHandleDataChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col lg={6}>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                          >
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              required
                              type="email"
                              placeholder="Enter your email"
                              className="custom-outline"
                              name="businessEmail"
                              value={businessEmail}
                              onChange={resellerHandleDataChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col lg={6}>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                          >
                            <Form.Label>Website</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder="Enter your Suburb"
                              className="custom-outline"
                              name="businessWebsite"
                              value={businessWebsite}
                              onChange={resellerHandleDataChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col lg={6}>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                          >
                            <Form.Label>Password</Form.Label>
                            <div className="pass-eye-wrapper">
                              <Form.Control
                                required
                                type={showPassword ? "text" : "password"}
                                minLength={6}
                                maxLength={12}
                                placeholder="Enter your Password"
                                className="custom-outline"
                                name="businessPassword"
                                value={businessPassword}
                                onChange={resellerHandleDataChange}
                              // value={password}
                              // onChange={(e) => setPassword(e.target.value)}
                              />
                              <div
                                className="eye-wrapper"
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="18"
                                    viewBox="0 0 20 18"
                                    fill="none"
                                  >
                                    <path
                                      d="M19.25 6.14999C16.94 2.51999 13.56 0.429993 10 0.429993C8.22 0.429993 6.49 0.949993 4.91 1.91999C3.33 2.89999 1.91 4.32999 0.75 6.14999C-0.25 7.71999 -0.25 10.27 0.75 11.84C3.06 15.48 6.44 17.56 10 17.56C11.78 17.56 13.51 17.04 15.09 16.07C16.67 15.09 18.09 13.66 19.25 11.84C20.25 10.28 20.25 7.71999 19.25 6.14999ZM10 13.04C7.76 13.04 5.96 11.23 5.96 8.99999C5.96 6.76999 7.76 4.95999 10 4.95999C12.24 4.95999 14.04 6.76999 14.04 8.99999C14.04 11.23 12.24 13.04 10 13.04Z"
                                      fill="#010101"
                                    />
                                  </svg>
                                ) : (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="21"
                                    height="19"
                                    viewBox="0 0 21 19"
                                    fill="none"
                                  >
                                    <path
                                      d="M10.3398 6.17417L13.346 9.1803L13.3603 9.02284C13.3603 7.44341 12.0767 6.15985 10.4973 6.15985L10.3398 6.17417Z"
                                      fill="black"
                                    />
                                    <path
                                      d="M10.4973 4.25122C13.1312 4.25122 15.2689 6.38894 15.2689 9.02288C15.2689 9.63842 15.1449 10.2253 14.9302 10.7645L17.7216 13.5559C19.1626 12.3535 20.2983 10.7979 20.9997 9.02288C19.344 4.83339 15.2737 1.86542 10.4973 1.86542C9.16125 1.86542 7.88248 2.10398 6.69434 2.53343L8.75569 4.59C9.29482 4.38006 9.88174 4.25122 10.4973 4.25122Z"
                                      fill="black"
                                    />
                                    <path
                                      d="M0.954313 1.65067L3.13018 3.82654L3.56442 4.26077C1.98977 5.49186 0.744376 7.12854 0 9.02286C1.651 13.2123 5.72597 16.1803 10.4976 16.1803C11.9769 16.1803 13.3892 15.894 14.6824 15.3739L15.088 15.7795L17.8699 18.5661L19.0866 17.3541L2.17108 0.433899L0.954313 1.65067ZM6.23178 6.92335L7.70622 8.3978C7.67113 8.58148 7.65259 8.76468 7.65259 8.95863C7.65259 10.5381 8.93616 11.8217 10.5156 11.8217C10.7096 11.8217 10.8928 11.8031 11.0765 11.768L12.5484 13.2399C11.9485 13.4533 11.2392 13.5677 10.4836 13.5677C7.84966 13.5677 5.71194 11.4299 5.71194 8.796C5.71194 8.04042 5.82632 7.33107 6.03975 6.73112L6.23178 6.92335Z"
                                      fill="black"
                                    />
                                  </svg>
                                )}
                              </div>
                            </div>
                          </Form.Group>
                        </Col>
                        <Col lg={6}>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                          >
                            <Form.Label>Confirm Password</Form.Label>
                            <div className="pass-eye-wrapper">
                              <Form.Control
                                required
                                type={showConfirmPassword ? "text" : "password"}
                                minLength={6}
                                maxLength={12}
                                placeholder="Confirm your Password"
                                className={`custom-outline ${errors.passwordMismatch ? "is-invalid" : ""
                                  }`}
                                value={confirmPassword}
                                onChange={(e) =>
                                  setConfirmPassword(e.target.value)
                                }
                              />
                              <div
                                className="eye-wrapper"
                                onClick={() =>
                                  setShowConfirmPassword(!showConfirmPassword)
                                }
                              >
                                {showConfirmPassword ? (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="18"
                                    viewBox="0 0 20 18"
                                    fill="none"
                                  >
                                    <path
                                      d="M19.25 6.14999C16.94 2.51999 13.56 0.429993 10 0.429993C8.22 0.429993 6.49 0.949993 4.91 1.91999C3.33 2.89999 1.91 4.32999 0.75 6.14999C-0.25 7.71999 -0.25 10.27 0.75 11.84C3.06 15.48 6.44 17.56 10 17.56C11.78 17.56 13.51 17.04 15.09 16.07C16.67 15.09 18.09 13.66 19.25 11.84C20.25 10.28 20.25 7.71999 19.25 6.14999ZM10 13.04C7.76 13.04 5.96 11.23 5.96 8.99999C5.96 6.76999 7.76 4.95999 10 4.95999C12.24 4.95999 14.04 6.76999 14.04 8.99999C14.04 11.23 12.24 13.04 10 13.04Z"
                                      fill="#010101"
                                    />
                                  </svg>
                                ) : (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="21"
                                    height="19"
                                    viewBox="0 0 21 19"
                                    fill="none"
                                  >
                                    <path
                                      d="M10.3398 6.17417L13.346 9.1803L13.3603 9.02284C13.3603 7.44341 12.0767 6.15985 10.4973 6.15985L10.3398 6.17417Z"
                                      fill="black"
                                    />
                                    <path
                                      d="M10.4973 4.25122C13.1312 4.25122 15.2689 6.38894 15.2689 9.02288C15.2689 9.63842 15.1449 10.2253 14.9302 10.7645L17.7216 13.5559C19.1626 12.3535 20.2983 10.7979 20.9997 9.02288C19.344 4.83339 15.2737 1.86542 10.4973 1.86542C9.16125 1.86542 7.88248 2.10398 6.69434 2.53343L8.75569 4.59C9.29482 4.38006 9.88174 4.25122 10.4973 4.25122Z"
                                      fill="black"
                                    />
                                    <path
                                      d="M0.954313 1.65067L3.13018 3.82654L3.56442 4.26077C1.98977 5.49186 0.744376 7.12854 0 9.02286C1.651 13.2123 5.72597 16.1803 10.4976 16.1803C11.9769 16.1803 13.3892 15.894 14.6824 15.3739L15.088 15.7795L17.8699 18.5661L19.0866 17.3541L2.17108 0.433899L0.954313 1.65067ZM6.23178 6.92335L7.70622 8.3978C7.67113 8.58148 7.65259 8.76468 7.65259 8.95863C7.65259 10.5381 8.93616 11.8217 10.5156 11.8217C10.7096 11.8217 10.8928 11.8031 11.0765 11.768L12.5484 13.2399C11.9485 13.4533 11.2392 13.5677 10.4836 13.5677C7.84966 13.5677 5.71194 11.4299 5.71194 8.796C5.71194 8.04042 5.82632 7.33107 6.03975 6.73112L6.23178 6.92335Z"
                                      fill="black"
                                    />
                                  </svg>
                                )}
                              </div>
                              {errors.passwordMismatch && (
                                <div className="invalid-feedback">
                                  Passwords do not match.
                                </div>
                              )}
                            </div>
                          </Form.Group>
                        </Col>
                      </Row>

                      <Button className="primary login-btn" type="submit">
                        Submit for Approval
                      </Button>
                    </Form>
                  </div>
                </Col>
              </Row>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
