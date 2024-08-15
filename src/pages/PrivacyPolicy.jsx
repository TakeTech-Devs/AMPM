import React from "react";
import "../styles/Legal.scss";
import bgImage from "../assets/bg-image.jpeg";
import { Container, Nav } from "react-bootstrap";
function PrivacyPolicy() {
  return (
    <>
      <section className="bg-image">
        <div className="flex-class">
          <Container fluid="lg">
            <div className="middle">
              <div className="image-content-wrapper">
                <h1>Privacy Policy</h1>
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
              <Nav.Link className="signup " href="/privacypolicy">
                Privacy Policy
              </Nav.Link>
            </Nav>
          </div>
        </Container>
      </section>

      <section className="bg-color sec-gap">
        <Container>
          <div className="privacy-wrapper">

          
          <div>
            <h2>Privacy Policy</h2>
            <p>
              Powering your inverters should be hassle-free and reliable. Okaya
              presents our advanced SMF/VRLA (Sealed Maintenance Free Valve
              Regulated Lead Acid) batteries. No more worries about maintenance
              with our fully sealed batteries. Enjoy a hassle-free experience
              with our SMF/VRLA batteries, designed for use in inverters.
              Whether its for your home, office, or industrial needs, our
              batteries deliver exceptional reliability and a long lifespan,
              ensuring a continuous power supply for your inverters. Backed by
              cutting-edge technology and stringent quality control measures,
              Okaya SMF/VRLA batteries excel in any environment. Rely on us for
              efficient and durable power solutions that go beyond your
              expectations. Discover peace of mind with Okaya SMF/VRLA Batteries
              and empower your world today
            </p>
          </div>
          <div>
            <h2>What Do We Do With The Information We Gather?</h2>
            <p>
              Powering your inverters should be hassle-free and reliable. Okaya
              presents our advanced SMF/VRLA (Sealed Maintenance Free Valve
              Regulated Lead Acid) batteries. No more worries about maintenance
              with our fully sealed batteries. Enjoy a hassle-free experience
              with our SMF/VRLA batteries, designed for use in inverters.
              Whether it's for your home, office, or industrial needs, our
              batteries deliver exceptional reliability and a long lifespan,
              ensuring a continuous power supply for your inverters. Backed by
              cutting-edge technology and stringent quality control measures,
              Okaya SMF/VRLA batteries excel in any environment. Rely on us for
              efficient and durable power solutions that go beyond your
              expectations. Discover peace of mind with Okaya SMF/VRLA Batteries
              and empower your world today
            </p>
          </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default PrivacyPolicy;
