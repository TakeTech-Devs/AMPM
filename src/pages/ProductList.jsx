import React from "react";
import { Col, Container, Row, Nav, Form, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/bg-image.jpeg";
import batteryImages from "../assets/Battery.png";
import "../styles/ProductDetails.scss";

function ProductList() {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/productdetails");
  };

  return (
    <>
      <section className="bg-image">
        <div className="flex-class">
          <Container fluid="lg">
            <div className="middle">
              <div className="image-content-wrapper">
                <h1>All Products</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Labore dignissimos vitae harum? Possimus atque voluptas.
                </p>
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
              <Nav.Link className="signup " href="/productlist">
                Product Listing
              </Nav.Link>
            </Nav>
          </div>

          <div className="selection ">
            <div className="selects">
              <h3>Categories:</h3>
              <Form.Select aria-label="Default select example">
                <option>XYZ</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
            <div className="selects">
              <h3>Type:</h3>
              <Form.Select aria-label="Default select example">
                <option>XYZ</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
            <div className="selects">
              <h3>Price:</h3>
              <Form.Select aria-label="Default select example">
                <option>Low to High</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
          </div>
          <div className="all-cards">
            <Row className="gy-4">
              {[...Array(6)].map((_, idx) => (
                <Col key={idx}>
                  <Card onClick={handleCardClick} className="clickable-card">
                    <div className="d-flex justify-content-center">
                      <Card.Img variant="top" src={batteryImages} />
                    </div>
                    <Card.Body>
                      <Card.Title>Battery Name</Card.Title>
                      <p>Battery Version:</p>
                      <p>Capacity:</p>
                      <p>Type:</p>
                      <p>Warranty:</p>
                      <h3>Price : 1200</h3>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}

export default ProductList;
