import React from "react";
import { Button, Container, Nav } from "react-bootstrap";
import "../styles/PaymentDetails.scss";
function AddressNormal() {
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
                Address
              </Nav.Link>
            </Nav>
          </div>
        </Container>
      </section>

      <section className="sec-gap bg-color">
        <Container>
          <div className="d-flex justify-content-center align-items-center">
            <div className="address-normal-wrapper">
              <div className="navigations">
                <h3>Go To :</h3>
                <Nav.Item>
                  <Nav.Link href="/cart">My Cart </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/orders">My Orders</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/address">Address Book</Nav.Link>
                </Nav.Item>
              </div>

              <div className="add-address-btn-wrapper">
                <Button className="primary">Add Address</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default AddressNormal;
