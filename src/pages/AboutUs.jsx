import { Col, Container, Row, Card } from "react-bootstrap";
import "../styles/ImageInfo.scss";
import bgImage from "../assets/bg-image.jpeg";
import "../styles/OurMission.scss";
import imageIcon from "../assets/mission-image.png";
import "../styles/Global.scss";
// import "../styles/WhatWeDo.scss";
import demoImage from "../assets/card-image.png";
export default function AboutUs() {
  return (
    <>
      <section className="bg-image">
        <div className="flex-class">
          <Container fluid="lg">
            <div className="middle">
              <div className="image-content-wrapper">
                <h1>About Us</h1>
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

      <section className="sec-gap bg-color">
        <Container fluid="lg">
          <Row className="g-sm-0 gy-4">
            <Col md={6}>
              <div className="left-part">
                <div className="heading">
                  <h2>Our Mission</h2>
                </div>
                <div className="sub-heading">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi voluptatibus minima veritatis totam cupiditate placeat
                    consequatur ratione animi accusamus quo officia quasi eum
                    mollitia omnis sunt quam impedit, perspiciatis dicta.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="Mission-image-wrapper">
                <img src={imageIcon} alt="Mission image" width="100%" height="100%"/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="sec-gap">
        <Container fluid="lg">
          <div className="d-flex justify-content-center">
            <div className="whatwedo-heading">
              <h1>What we do</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni,
                voluptatum repellat nesciunt quis placeat doloremque corrupti
                possimus. Quaerat quia perferendis incidunt cum in architecto,
                sunt ullam sapiente nihil esse excepturi.
              </p>
            </div>
          </div>
          <Row>
            <Col md={12} lg={6} xl={4}>
              <Card className="whatwedoCard">
                <div className="card-image-wrapper">
                  <img src={demoImage} alt="Card image" />
                </div>

                <Card.Body>
                  <div className="whatwedo">
                    <Card.Title>
                      <h2>Lorem Ipsum</h2>
                    </Card.Title>
                    <Card.Text className="text-center">
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Temporibus hic porro autem, ducimus pariatur
                        architecto accusantium? Perspiciatis non,
                      </p>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={12} lg={6} xl={4}>
              <Card className="whatwedoCard">
                <div className="card-image-wrapper">
                  <img src={demoImage} alt="Card image" />
                </div>

                <Card.Body>
                  <div className="whatwedo">
                    <Card.Title>
                      <h2>Lorem Ipsum</h2>
                    </Card.Title>
                    <Card.Text className="text-center">
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Impedit nihil quod sunt numquam unde, enim,
                        officiis temporibus quis error deleniti soluta
                        blanditiis est cum ab molestiae consequatur sit
                        necessitatibus aliquam.
                      </p>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={12} lg={12} xl={4}>
              <Card className="whatwedoCard">
                <div className="card-image-wrapper">
                  <img src={demoImage} alt="Card image" />
                </div>

                <Card.Body>
                  <div className="whatwedo">
                    <Card.Title>
                      <h2>Lorem Ipsum</h2>
                    </Card.Title>
                    <Card.Text className="text-center">
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Temporibus hic porro autem, ducimus pariatur
                        architecto accusantium? Perspiciatis non,
                      </p>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* <input type="text" className="custom-outline" placeholder="Enter the name"/> */}

          
        </Container>
      </section>
    </>
  );
}
