import { Col, Container, Row, Nav } from "react-bootstrap";
import "../../../styles/Products.scss";
import battery from "../../../assets/Battery.png";
import "../../../styles/Global.scss";
import bgImage from "../../../assets/bg-image.jpeg";
import imageIcon from "../../../assets/mission-image.png";
import "../../../styles/ImageInfo.scss";
import "../../../styles/SignUp.scss";

function Products() {
  return (
    <>
      <section className="bg-image">
        <div className="flex-class">
          <Container fluid="lg">
            <div className="middle">
              <div className="image-content-wrapper">
                <h1>Products</h1>
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
      <section className="sec-gap bg-color ">
        <Container fluid="lg">
          <div className="content-wrapper">
            <Row className="g-sm-0 gy-4">
              <Col md={6}>
                <div className="left-part">
                  <div className="heading">
                    <h2>Amaron Batteries</h2>
                  </div>
                  <div className="sub-heading">
                    <p>
                      Powering your inverters should be hassle-free and
                      reliable. Okaya presents our advanced SMF/VRLA (Sealed
                      Maintenance Free Valve Regulated Lead Acid) batteries. No
                      more worries about maintenance with our fully sealed
                      batteries. Enjoy a hassle-free experience with our
                      SMF/VRLA batteries, designed for use in inverters. Whether
                      it's for your home, office, or industrial needs, our
                      batteries deliver exceptional reliability and a long
                      lifespan, ensuring a continuous power supply for your
                      inverters. Backed by cutting-edge technology and stringent
                      quality control measures, Okaya SMF/VRLA batteries excel
                      in any environment. Rely on us for efficient and durable
                      power solutions that go beyond your expectations. Discover
                      peace of mind with Okaya SMF/VRLA Batteries and empower
                      your world today
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="Mission-image-wrapper">
                  <img
                    src={imageIcon}
                    alt="Mission image"
                    width="100%"
                    height="100%"
                  />
                </div>
              </Col>
            </Row>
            <div className="overdiv">
              <div className="one">
                <div className="svg-div">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="59"
                    height="43"
                    viewBox="0 0 59 43"
                    fill="none"
                  >
                    <path
                      d="M46.25 25.5938C46.25 26.149 46.0294 26.6816 45.6368 27.0743C45.2441 27.4669 44.7115 27.6875 44.1562 27.6875H42.0625V29.7812C42.0625 30.3365 41.8419 30.8691 41.4493 31.2618C41.0566 31.6544 40.524 31.875 39.9688 31.875C39.4135 31.875 38.8809 31.6544 38.4882 31.2618C38.0956 30.8691 37.875 30.3365 37.875 29.7812V27.6875H35.7812C35.226 27.6875 34.6934 27.4669 34.3007 27.0743C33.9081 26.6816 33.6875 26.149 33.6875 25.5938C33.6875 25.0385 33.9081 24.5059 34.3007 24.1132C34.6934 23.7206 35.226 23.5 35.7812 23.5H37.875V21.4062C37.875 20.851 38.0956 20.3184 38.4882 19.9257C38.8809 19.5331 39.4135 19.3125 39.9688 19.3125C40.524 19.3125 41.0566 19.5331 41.4493 19.9257C41.8419 20.3184 42.0625 20.851 42.0625 21.4062V23.5H44.1562C44.7115 23.5 45.2441 23.7206 45.6368 24.1132C46.0294 24.5059 46.25 25.0385 46.25 25.5938ZM23.2188 23.5H14.8438C14.2885 23.5 13.7559 23.7206 13.3632 24.1132C12.9706 24.5059 12.75 25.0385 12.75 25.5938C12.75 26.149 12.9706 26.6816 13.3632 27.0743C13.7559 27.4669 14.2885 27.6875 14.8438 27.6875H23.2188C23.774 27.6875 24.3066 27.4669 24.6993 27.0743C25.0919 26.6816 25.3125 26.149 25.3125 25.5938C25.3125 25.0385 25.0919 24.5059 24.6993 24.1132C24.3066 23.7206 23.774 23.5 23.2188 23.5ZM58.8125 13.0312V38.1562C58.8125 39.2668 58.3713 40.332 57.586 41.1173C56.8007 41.9026 55.7356 42.3438 54.625 42.3438H4.375C3.26441 42.3438 2.1993 41.9026 1.41399 41.1173C0.628682 40.332 0.1875 39.2668 0.1875 38.1562V13.0312C0.1875 11.9207 0.628682 10.8555 1.41399 10.0702C2.1993 9.28493 3.26441 8.84375 4.375 8.84375H8.5625V4.65625C8.5625 3.54566 9.00368 2.48055 9.78899 1.69524C10.5743 0.909932 11.6394 0.46875 12.75 0.46875H21.125C22.2356 0.46875 23.3007 0.909932 24.086 1.69524C24.8713 2.48055 25.3125 3.54566 25.3125 4.65625V8.84375H33.6875V4.65625C33.6875 3.54566 34.1287 2.48055 34.914 1.69524C35.6993 0.909932 36.7644 0.46875 37.875 0.46875H46.25C47.3606 0.46875 48.4257 0.909932 49.211 1.69524C49.9963 2.48055 50.4375 3.54566 50.4375 4.65625V8.84375H54.625C55.7356 8.84375 56.8007 9.28493 57.586 10.0702C58.3713 10.8555 58.8125 11.9207 58.8125 13.0312ZM37.875 8.84375H46.25V4.65625H37.875V8.84375ZM12.75 8.84375H21.125V4.65625H12.75V8.84375ZM54.625 38.1562V13.0312H4.375V38.1562H54.625Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <p>Completely sealed</p>
              </div>
              <div className="one">
                <div className="svg-div">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="59"
                    height="43"
                    viewBox="0 0 59 43"
                    fill="none"
                  >
                    <path
                      d="M46.25 25.5938C46.25 26.149 46.0294 26.6816 45.6368 27.0743C45.2441 27.4669 44.7115 27.6875 44.1562 27.6875H42.0625V29.7812C42.0625 30.3365 41.8419 30.8691 41.4493 31.2618C41.0566 31.6544 40.524 31.875 39.9688 31.875C39.4135 31.875 38.8809 31.6544 38.4882 31.2618C38.0956 30.8691 37.875 30.3365 37.875 29.7812V27.6875H35.7812C35.226 27.6875 34.6934 27.4669 34.3007 27.0743C33.9081 26.6816 33.6875 26.149 33.6875 25.5938C33.6875 25.0385 33.9081 24.5059 34.3007 24.1132C34.6934 23.7206 35.226 23.5 35.7812 23.5H37.875V21.4062C37.875 20.851 38.0956 20.3184 38.4882 19.9257C38.8809 19.5331 39.4135 19.3125 39.9688 19.3125C40.524 19.3125 41.0566 19.5331 41.4493 19.9257C41.8419 20.3184 42.0625 20.851 42.0625 21.4062V23.5H44.1562C44.7115 23.5 45.2441 23.7206 45.6368 24.1132C46.0294 24.5059 46.25 25.0385 46.25 25.5938ZM23.2188 23.5H14.8438C14.2885 23.5 13.7559 23.7206 13.3632 24.1132C12.9706 24.5059 12.75 25.0385 12.75 25.5938C12.75 26.149 12.9706 26.6816 13.3632 27.0743C13.7559 27.4669 14.2885 27.6875 14.8438 27.6875H23.2188C23.774 27.6875 24.3066 27.4669 24.6993 27.0743C25.0919 26.6816 25.3125 26.149 25.3125 25.5938C25.3125 25.0385 25.0919 24.5059 24.6993 24.1132C24.3066 23.7206 23.774 23.5 23.2188 23.5ZM58.8125 13.0312V38.1562C58.8125 39.2668 58.3713 40.332 57.586 41.1173C56.8007 41.9026 55.7356 42.3438 54.625 42.3438H4.375C3.26441 42.3438 2.1993 41.9026 1.41399 41.1173C0.628682 40.332 0.1875 39.2668 0.1875 38.1562V13.0312C0.1875 11.9207 0.628682 10.8555 1.41399 10.0702C2.1993 9.28493 3.26441 8.84375 4.375 8.84375H8.5625V4.65625C8.5625 3.54566 9.00368 2.48055 9.78899 1.69524C10.5743 0.909932 11.6394 0.46875 12.75 0.46875H21.125C22.2356 0.46875 23.3007 0.909932 24.086 1.69524C24.8713 2.48055 25.3125 3.54566 25.3125 4.65625V8.84375H33.6875V4.65625C33.6875 3.54566 34.1287 2.48055 34.914 1.69524C35.6993 0.909932 36.7644 0.46875 37.875 0.46875H46.25C47.3606 0.46875 48.4257 0.909932 49.211 1.69524C49.9963 2.48055 50.4375 3.54566 50.4375 4.65625V8.84375H54.625C55.7356 8.84375 56.8007 9.28493 57.586 10.0702C58.3713 10.8555 58.8125 11.9207 58.8125 13.0312ZM37.875 8.84375H46.25V4.65625H37.875V8.84375ZM12.75 8.84375H21.125V4.65625H12.75V8.84375ZM54.625 38.1562V13.0312H4.375V38.1562H54.625Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <p>ABS Container</p>
              </div>
              <div className="one">
                <div className="svg-div">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="59"
                    height="43"
                    viewBox="0 0 59 43"
                    fill="none"
                  >
                    <path
                      d="M46.25 25.5938C46.25 26.149 46.0294 26.6816 45.6368 27.0743C45.2441 27.4669 44.7115 27.6875 44.1562 27.6875H42.0625V29.7812C42.0625 30.3365 41.8419 30.8691 41.4493 31.2618C41.0566 31.6544 40.524 31.875 39.9688 31.875C39.4135 31.875 38.8809 31.6544 38.4882 31.2618C38.0956 30.8691 37.875 30.3365 37.875 29.7812V27.6875H35.7812C35.226 27.6875 34.6934 27.4669 34.3007 27.0743C33.9081 26.6816 33.6875 26.149 33.6875 25.5938C33.6875 25.0385 33.9081 24.5059 34.3007 24.1132C34.6934 23.7206 35.226 23.5 35.7812 23.5H37.875V21.4062C37.875 20.851 38.0956 20.3184 38.4882 19.9257C38.8809 19.5331 39.4135 19.3125 39.9688 19.3125C40.524 19.3125 41.0566 19.5331 41.4493 19.9257C41.8419 20.3184 42.0625 20.851 42.0625 21.4062V23.5H44.1562C44.7115 23.5 45.2441 23.7206 45.6368 24.1132C46.0294 24.5059 46.25 25.0385 46.25 25.5938ZM23.2188 23.5H14.8438C14.2885 23.5 13.7559 23.7206 13.3632 24.1132C12.9706 24.5059 12.75 25.0385 12.75 25.5938C12.75 26.149 12.9706 26.6816 13.3632 27.0743C13.7559 27.4669 14.2885 27.6875 14.8438 27.6875H23.2188C23.774 27.6875 24.3066 27.4669 24.6993 27.0743C25.0919 26.6816 25.3125 26.149 25.3125 25.5938C25.3125 25.0385 25.0919 24.5059 24.6993 24.1132C24.3066 23.7206 23.774 23.5 23.2188 23.5ZM58.8125 13.0312V38.1562C58.8125 39.2668 58.3713 40.332 57.586 41.1173C56.8007 41.9026 55.7356 42.3438 54.625 42.3438H4.375C3.26441 42.3438 2.1993 41.9026 1.41399 41.1173C0.628682 40.332 0.1875 39.2668 0.1875 38.1562V13.0312C0.1875 11.9207 0.628682 10.8555 1.41399 10.0702C2.1993 9.28493 3.26441 8.84375 4.375 8.84375H8.5625V4.65625C8.5625 3.54566 9.00368 2.48055 9.78899 1.69524C10.5743 0.909932 11.6394 0.46875 12.75 0.46875H21.125C22.2356 0.46875 23.3007 0.909932 24.086 1.69524C24.8713 2.48055 25.3125 3.54566 25.3125 4.65625V8.84375H33.6875V4.65625C33.6875 3.54566 34.1287 2.48055 34.914 1.69524C35.6993 0.909932 36.7644 0.46875 37.875 0.46875H46.25C47.3606 0.46875 48.4257 0.909932 49.211 1.69524C49.9963 2.48055 50.4375 3.54566 50.4375 4.65625V8.84375H54.625C55.7356 8.84375 56.8007 9.28493 57.586 10.0702C58.3713 10.8555 58.8125 11.9207 58.8125 13.0312ZM37.875 8.84375H46.25V4.65625H37.875V8.84375ZM12.75 8.84375H21.125V4.65625H12.75V8.84375ZM54.625 38.1562V13.0312H4.375V38.1562H54.625Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <p>Maintenance free</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="sec-gap  ">
        <Container fluid="lg">
          <div className="product-wrapper">
            <Row className="g-sm-0 gy-4">
              <Col md={6}>
                <div className="Mission-image-wrapper">
                  <img
                    src={battery}
                    alt="Mission image"
                    width="100%"
                    height="100%"
                  />
                </div>
              </Col>

              <Col md={6}>
                <div className="left-part">
                  <div className="heading">
                    <h2>Exclusive Features</h2>
                  </div>
                  <div className="sub-heading">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      dolor semper at ac tempus enim laoreet massa non. Lorem
                      ipsum dolor sit amet consectetur adipiscing elit dolor
                      semper at ac tempus enim laoreet massa non.Lorem ipsum
                      dolor sit amet consectetur adipiscing elit dolor semper at
                      ac tempus enim laoreet massa non.
                    </p>
                  </div>
                  <div className="check-list-wrapper">
                    <ul>
                      <li>All analytics features</li>
                      <li>Up to 250,000 tracked visits</li>
                      <li>Normal support</li>
                      <li>Mobile app</li>
                      <li>Up to 3 team members</li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Products;
