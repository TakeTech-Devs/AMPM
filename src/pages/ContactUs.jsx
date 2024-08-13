import React from "react";
import { Button, Col, Container, Form, Nav, Row } from "react-bootstrap";
import bgImage from "../assets/bg-image.jpeg";
import blankicon from "../assets/icon2.png";
import "../styles/ContactUs.scss";
function ContactUs() {
  return (
    <>
      <section className="bg-image">
        <div className="flex-class">
          <Container fluid="lg">
            <div className="middle">
              <div className="image-content-wrapper">
                <h1>Get in touch with us</h1>
              </div>
            </div>
          </Container>
        </div>
        <div className="bg-image-wrapper">
          <img src={bgImage} alt="Background" />
        </div>
      </section>
      <section>
        <Container>
          <div className="navigation product-nav">
            <Nav.Link className="" href="/">
              <h3>
                Home
                <span className="pe-2">/</span>
              </h3>
            </Nav.Link>
            <Nav className="me-auto align-items-center">
              <Nav.Link className="signup " href="/contactus">
                Contact Us
              </Nav.Link>
            </Nav>
          </div>
        </Container>
      </section>

      <section className="bg-color contact-sec-gap ">
        <Container>
          <div className="contactus-details-wrapper ">
            <Row>
              <Col>
                <div className="left-contact">
                  <div className="d-flex flex-column flex-gap">
                    <div className="type">
                      <div className="img-icon-wrapper">
                        <img
                          src={blankicon}
                          alt="icon"
                          width="100%"
                          height="100%"
                        />
                      </div>
                      <div className="contact-details-wrapper">
                        <h3>Landline</h3>
                        <p>0123456789</p>
                      </div>
                    </div>
                    <div className="type">
                      <div className="img-icon-wrapper">
                        <img
                          src={blankicon}
                          alt="icon"
                          width="100%"
                          height="100%"
                        />
                      </div>
                      <div className="contact-details-wrapper">
                        <h3>Mobile</h3>
                        <p>0123456789</p>
                      </div>
                    </div>
                    <div className="type">
                      <div className="img-icon-wrapper">
                        <img
                          src={blankicon}
                          alt="icon"
                          width="100%"
                          height="100%"
                        />
                      </div>
                      <div className="contact-details-wrapper">
                        <h3>Email Support</h3>
                        <p>xyz@email.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="form-wrapper">
                  <Form>
                    <Row>
                      <Col xs={12} xl={6}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="John Carter"
                            className="contact-outline"
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={12} xl={6}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="example@email.com"
                            className="contact-outline"
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={12} xl={6}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Phone</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="(123) 456 - 789"
                            className="contact-outline"
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={12} xl={6}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Company</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Facebook"
                            className="contact-outline"
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={12} xl={12}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label>Message</Form.Label>
                          <Form.Control
                            className="contact-outline-textarea"
                            placeholder="Please type your message here..."
                            as="textarea"
                            rows={3}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Button className="primary-radius">
                      Add To Cart
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="33"
                        height="32"
                        viewBox="0 0 33 32"
                        fill="none"
                      >
                        <path
                          d="M10.8604 27C11.4126 27 11.8604 26.5523 11.8604 26C11.8604 25.4477 11.4126 25 10.8604 25C10.3081 25 9.86035 25.4477 9.86035 26C9.86035 26.5523 10.3081 27 10.8604 27Z"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M24.8604 27C25.4126 27 25.8604 26.5523 25.8604 26C25.8604 25.4477 25.4126 25 24.8604 25C24.3081 25 23.8604 25.4477 23.8604 26C23.8604 26.5523 24.3081 27 24.8604 27Z"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M2.86035 5H6.86035L9.86035 22H25.8604"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.86035 18H25.4503C25.566 18.0001 25.6781 17.9601 25.7675 17.8868C25.857 17.8135 25.9183 17.7115 25.941 17.5981L27.741 8.59813C27.7555 8.52555 27.7537 8.45066 27.7358 8.37886C27.7179 8.30705 27.6842 8.24012 27.6373 8.1829C27.5903 8.12567 27.5313 8.07959 27.4644 8.04796C27.3975 8.01633 27.3244 7.99995 27.2503 8H7.86035"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="contact-map-wrapper">
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39037.66748380973!2d88.31895200043243!3d22.518770322900174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02771346ae015d%3A0xb540e4bce39763!2sVictoria%20Memorial!5e1!3m2!1sen!2sin!4v1722879567590!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default ContactUs;
