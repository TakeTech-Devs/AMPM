import React, { useState } from "react";
import { Button, Col, Container, Form, Nav, Row } from "react-bootstrap";
import bgImage from "../assets/bg-image.jpeg";
import blankicon from "../assets/icon2.png";
import "../styles/ContactUs.scss";

function ContactUs() {
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({
    invalidPhone: false,
  });

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/; // Example: 10-digit phone number
    return phoneRegex.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePhone(phone)) {
      setErrors((prev) => ({ ...prev, invalidPhone: true }));
      return;
    } else {
      setErrors((prev) => ({ ...prev, invalidPhone: false }));
      window.alert("Form submitted successfully");
      window.location.reload();
    }
  };

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
                <span>/</span>
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

      <section className="bg-color sec-gap ">
        <Container>
          <div className="contactus-details-wrapper ">
            <Row className="flex-wrap-reverse">
              <Col lg={6}>
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
              <Col lg={6}>
                <div className="form-wrapper">
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col xs={12} xl={6}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            required
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
                            required
                            type="email"
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
                            required
                            type="tel"
                            placeholder="Enter your Phone"
                            maxLength={10}
                            className={`contact-outline ${
                              errors.invalidPhone ? "is-invalid" : ""
                            }`}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                          {errors.invalidPhone && (
                            <div className="invalid-feedback">
                              Please enter a valid phone number.
                            </div>
                          )}
                        </Form.Group>
                      </Col>
                      <Col xs={12} xl={6}>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Company</Form.Label>
                          <Form.Control
                            required
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
                            required
                            className="contact-outline-textarea"
                            placeholder="Please type your message here..."
                            as="textarea"
                            rows={3}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <div className="d-flex justify-content-center">
                      <Button className="primary" type="submit">
                        Send Message
                      </Button>
                    </div>
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      {/* <section>
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
      </section> */}
    </>
  );
}

export default ContactUs;
