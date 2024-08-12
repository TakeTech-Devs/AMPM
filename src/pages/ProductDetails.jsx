import React from "react";
import { Col, Container, Row, Nav, Form, Card, Button } from "react-bootstrap";
import bgImage from "../assets/bg-image.jpeg";
import battery from "../assets/Battery.png";
import "../styles/ProductDetailsCheck.scss";
function ProductDetails() {
  const count = 1;
  return (
    <>
      <section className="bg-image">
        <div className="flex-class">
          <Container fluid="lg">
            <div className="middle">
              <div className="image-content-wrapper">
                <h1>Battery name</h1>
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
              <Nav.Link className="signup " href="/productlist">
                Product Listing
              </Nav.Link>
              <span>/</span>
              <Nav.Link className="signup " href="/productdetails">
                Product Details
              </Nav.Link>
            </Nav>
          </div>
          <div className="final-product-details-wrapper">
            <Row>
              <Col md={6}>
                <div className="Mission-image-wrapper battery-image-wrapper">
                  <img
                    src={battery}
                    alt="Mission image"
                    width="100%"
                    height="100%"
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="left-part right-part">
                  <div className="heading">
                    <h2 className="mb-3">Battery Name</h2>
                    <h3 className="mb-3">$1000.00</h3>
                    <h2 className="text-black mb-3">
                      $699.00 <span className="sale-info">Sale Price</span>
                    </h2>
                    <p>Lorem ipsum dolor, sit amet consectetur </p>
                  </div>
                  <div className="sub-heading">
                    <p>Capacity :</p>
                    <p>Warranty :</p>
                    <p>Technology :</p>
                  </div>
                  <div className="quantity">
                    <p>Quantity</p>
                    <div className="btn-wrapper">
                      <Button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M8 12H16"
                            stroke="#80B32F"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                            stroke="#80B32F"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Button>
                       <h2>{count}</h2>
                      <Button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M8 12H16"
                            stroke="#80B32F"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12 16V8"
                            stroke="#80B32F"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                            stroke="#80B32F"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Button>
                    </div>
                  </div>
                  <Button>
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
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}

export default ProductDetails;
