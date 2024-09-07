import React, { useEffect, useState } from "react";
import { Col, Container, Row, Form, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/Login.scss";
import loginImage from "../assets/login-right-image.png";
import loginPageLogo from "../assets/login-page-logo.png";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, consumerLogin } from "../actions/userActions";

export default function Login() {
  const dispatch = useDispatch();
  const [activeForm, setActiveForm] = useState("consumer");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const { error, loading, isAuthenticated } = useSelector((state) => state.user);


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(consumerLogin(email, password));
  };



  useEffect(() => {
    if (error) {
      // alert.error(error)
      window.alert(error);
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      // navigate(`/${redirect}`)
      navigate("/")
    }
  }, [dispatch, error, isAuthenticated, navigate]);

  return (
    <>
      <section className="login-sec sec-gap">
        <div className="user-login-wrapper">
          <Container>
            {activeForm === "consumer" && (
              <div className="consumer">
                <Row className="align-items-center">
                  <Col sm={12} lg={6}>
                    <div className="login-from">
                      <Form onSubmit={handleSubmit}>
                        <h2 className="text-black">Welcome !</h2>

                        <Nav className="me-auto align-items-center">
                          <Nav.Link className="ps-0" href="/signup">
                            Sign Up
                          </Nav.Link>
                          <h3 className="text-black">Or</h3>
                          <Nav.Link className="active" href="/login">
                            Login
                          </Nav.Link>
                        </Nav>

                        <Nav className="me-auto  sec-nav">
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

                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            required
                            type="email"
                            placeholder="Enter your Email"
                            className="custom-outline"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </Form.Group>
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
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <div
                              className="eye-wrapper"
                              onClick={togglePasswordVisibility}
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
                                    d="M0.954313 1.65067L3.13018 3.82654L3.56442 4.26077C1.98977 5.49186 0.744376 7.12854 0 9.02286C1.651 13.2123 5.72597 16.1803 10.4976 16.1803C11.9769 16.1803 13.3892 15.894 14.6824 15.3739L15.088 15.7795L17.8699 18.5661L19.0866 17.3541L2.17108 0.433899L0.954313 1.65067ZM6.23178 6.92335L7.70622 8.39779C7.66327 8.60298 7.63464 8.80813 7.63464 9.02286C7.63464 10.6023 8.9182 11.8858 10.4976 11.8858C10.7124 11.8858 10.9175 11.8572 11.118 11.8143L12.5924 13.2887C11.9577 13.6036 11.2516 13.7945 10.4976 13.7945C7.86368 13.7945 5.72597 11.6568 5.72597 9.02286C5.72597 8.26895 5.91685 7.56273 6.23178 6.92335Z"
                                    fill="black"
                                  />
                                </svg>
                              )}
                            </div>
                          </div>
                        </Form.Group>

                        <Button className="primary login-btn" type="submit">
                          Login
                        </Button>

                        <div className="need-an-account-wrapper">
                          <p>
                            Need an account?{" "}
                            <span>
                              {" "}
                              <Nav.Link href="/signup">Create One</Nav.Link>
                            </span>{" "}
                          </p>
                        </div>
                      </Form>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="right-wrapper">
                      <div className="login-img-wrapper">
                        <img
                          src={loginImage}
                          alt="Company Vision image"
                          width="100%"
                          height="100%"
                        />
                      </div>

                      <div className="loginImage-inside-content-wrapper">
                        <div className="image-wrap">
                          <img src={loginPageLogo} alt="logo" />
                        </div>

                        <h2>POWERING MACHINES</h2>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            )}

            {/* Reseller Login */}
            
            {activeForm === "reseller" && (
              <div className="reseller">
                <Row className="align-items-center">
                  <Col sm={12} lg={6}>
                    <div className="login-from">
                      <Form onSubmit={handleSubmit}>
                        <h2 className="text-black">Welcome !</h2>

                        <Nav className="me-auto align-items-center">
                          <Nav.Link className="ps-0" href="/signup">
                            Sign Up
                          </Nav.Link>
                          <h3 className="text-black">Or</h3>
                          <Nav.Link className="active" href="/login">
                            Login
                          </Nav.Link>
                        </Nav>

                        <Nav className="me-auto  sec-nav">
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

                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            required
                            type="email"
                            placeholder="Enter your Email"
                            className="custom-outline"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </Form.Group>
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
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <div
                              className="eye-wrapper"
                              onClick={togglePasswordVisibility}
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
                                    d="M0.954313 1.65067L3.13018 3.82654L3.56442 4.26077C1.98977 5.49186 0.744376 7.12854 0 9.02286C1.651 13.2123 5.72597 16.1803 10.4976 16.1803C11.9769 16.1803 13.3892 15.894 14.6824 15.3739L15.088 15.7795L17.8699 18.5661L19.0866 17.3541L2.17108 0.433899L0.954313 1.65067ZM6.23178 6.92335L7.70622 8.39779C7.66327 8.60298 7.63464 8.80813 7.63464 9.02286C7.63464 10.6023 8.9182 11.8858 10.4976 11.8858C10.7124 11.8858 10.9175 11.8572 11.118 11.8143L12.5924 13.2887C11.9577 13.6036 11.2516 13.7945 10.4976 13.7945C7.86368 13.7945 5.72597 11.6568 5.72597 9.02286C5.72597 8.26895 5.91685 7.56273 6.23178 6.92335Z"
                                    fill="black"
                                  />
                                </svg>
                              )}
                            </div>
                          </div>
                        </Form.Group>

                        <Button className="primary login-btn" type="submit">
                          Login
                        </Button>

                        <div className="need-an-account-wrapper">
                          <p>
                            Need an account?{" "}
                            <span>
                              {" "}
                              <Nav.Link href="/signup">Create One</Nav.Link>
                            </span>{" "}
                          </p>
                        </div>
                      </Form>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="right-wrapper">
                      <div className="login-img-wrapper">
                        <img
                          src={loginImage}
                          alt="Company Vision image"
                          width="100%"
                          height="100%"
                        />
                      </div>

                      <div className="loginImage-inside-content-wrapper">
                        <div className="image-wrap">
                          <img src={loginPageLogo} alt="logo" />
                        </div>

                        <h2>POWERING MACHINES</h2>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            )}

          </Container>
        </div>
      </section>
    </>
  );
}
