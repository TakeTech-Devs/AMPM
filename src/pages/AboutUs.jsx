import { Col, Container, Row, Card } from "react-bootstrap";
import "../styles/ImageInfo.scss";
import bgImage from "../assets/bg-image.jpeg";
import "../styles/OurMission.scss";
import imageIcon from "../assets/mission-image.png";
import "../styles/Global.scss";
import demoImage from "../assets/card-image.png";
import "../styles/About.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getAbout } from "../actions/aboutAction";
import { clearErrors } from "../actions/userActions";


export default function AboutUs() {

  const dispatch = useDispatch();

  const { about, loading, error } = useSelector(state => state.getAbout)

  useEffect(() => {
    dispatch(getAbout());

    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error]);

  return (
    <>
      <section className="bg-image">
        <div className="flex-class">
          <Container fluid="lg">
            <div className="middle">
              <div className="image-content-wrapper">
                {/* <h1>About Us</h1> */}
                {about && about.headerTitle ? (
                  <h1>{about.headerTitle}</h1>
                ) : (
                  <h1>About Us</h1>
                )}
                {/* <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Labore dignissimos vitae harum? Possimus atque voluptas.
                </p> */}

                {about && about.headerDescription ? (
                  <p>{about.headerDescription}</p>
                ) : (
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Labore dignissimos vitae harum? Possimus atque voluptas.
                  </p>
                )}
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
          <Row>
            <Col md={6}>
              <div className="left-part">
                <div className="heading">
                  {/* <h2>Our Mission</h2> */}
                  {about && about.ourMissionTitle ? (
                    <h2>{about.ourMissionTitle}</h2>
                  ) : (
                    <h2>Our Mission</h2>
                  )}
                </div>
                <div className="sub-heading">
                  {/* <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi voluptatibus minima veritatis totam cupiditate placeat
                    consequatur ratione animi accusamus quo officia quasi eum
                    mollitia omnis sunt quam impedit, perspiciatis dicta.
                  </p> */}
                  {about && about.ourMissionDescription ? (
                    <p>{about.ourMissionDescription}</p>
                  ) : (
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sequi voluptatibus minima veritatis totam cupiditate placeat
                      consequatur ratione animi accusamus quo officia quasi eum
                      mollitia omnis sunt quam impedit, perspiciatis dicta.
                    </p>
                  )}
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="Mission-image-wrapper mt-4">
                <img src={imageIcon} alt="Mission image" width="100%" height="100%" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="sec-gap">
        <Container fluid="lg">
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="whatwedo-heading">
                {/* <h2 className="text-center">What we do</h2> */}
                {about && about.weDoTitle ? (
                  <h2 className="text-center">{about.weDoTitle}</h2>
                ) : (
                  <h2 className="text-center">What we do</h2>
                )}
                {/* <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni,
                  voluptatum repellat nesciunt quis placeat doloremque corrupti
                  possimus. Quaerat quia perferendis incidunt cum in architecto,
                  sunt ullam sapiente nihil esse excepturi.
                </p> */}
                {about && about.weDoDescription ? (
                  <p className="text-center">{about.weDoDescription}</p>
                ) : (
                  <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni,
                    voluptatum repellat nesciunt quis placeat doloremque corrupti
                  </p>
                )}
              </div>
            </Col>
          </Row>
            {/* <Row className="gy-3">
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
            </Row> */}

          {/* <input type="text" className="custom-outline" placeholder="Enter the name"/> */}


        </Container>
      </section>
    </>
  );
}
