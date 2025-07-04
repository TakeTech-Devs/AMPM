import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import bgvideo from "../assets/homeVideo.mp4";
import "../styles/index.scss";
import Slider from "../components/common/slider/Slider";
import RatingSlider from "../components/common/slider/RatingSlider";
import battery from "../assets/Battery.png";
import "../styles/Global.scss";
import { useSelector, useDispatch } from 'react-redux';
import { clearErrors, getHome } from "../actions/homeAction";
import { useEffect } from "react";
import { getAbout } from "../actions/aboutAction";
import Loader from "../components/common/loader/Loader";


const Index = () => {

  const dispatch = useDispatch();

  const { home, loading, error } = useSelector(state => state.getHome)
  const { about } = useSelector(state => state.getAbout)

  useEffect(() => {
    dispatch(getHome());
    dispatch(getAbout());

    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error]);


  return (
    <>
    {loading && <Loader/>}
      <section className="bg-video">
        <div className="home-banner"></div>
        <div className="overlay">
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
            {/* <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
              phasellus mollis sit aliquam sit nullam neque ultrices
            </p> */}
            {home && home.highlightOne ? (
              <p className="text-center">{home.highlightOne}</p>
            ) : (
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
                phasellus mollis sit aliquam sit nullam neque ultrices
              </p>
            )}
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
            {/* <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
              phasellus mollis sit aliquam sit nullam neque ultrices.
            </p> */}
            {home && home.highlightTwo ? (
              <p className="text-center">{home.highlightTwo}</p>
            ) : (
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
                phasellus mollis sit aliquam sit nullam neque ultrices
              </p>
            )}
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
            {/* <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
              phasellus mollis sit aliquam sit nullam neque ultrices.
            </p> */}
            {home && home.highlightThree ? (
              <p className="text-center">{home.highlightThree}</p>
            ) : (
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
                phasellus mollis sit aliquam sit nullam neque ultrices
              </p>
            )}
          </div>
        </div>

        <Container>
          <Row className="video-content-wrapper">
            <Col xl={6}>
              {/* <h1>A dedicated team to grow your company</h1> */}
              {home && home.headerTitle ? (
                <h1>{home.headerTitle}</h1>
              ) : (
                <h1>A dedicated team to grow your company</h1>
              )}
              {/* <p>
                Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
                phasellus mollis sit aliquam sit nullam neque ultrices. lor
              </p> */}
              {home && home.headerDescription ? (
                <p>{home.headerDescription}</p>
              ) : (
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
                  phasellus mollis sit aliquam sit nullam neque ultrices. lor
                </p>
              )}
            </Col>
            <Col xs={12}>
              <div className="video-banner-features">
                <div className="features-wrapper">
                  <div className="d-flex align-items-center d-gap">
                    <div className="svg-wrap">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="51"
                        height="51"
                        viewBox="0 0 51 51"
                        fill="none"
                      >
                        <path
                          d="M46.3523 1.7017C45.4818 1.21733 44.5244 0.909296 43.5347 0.795222C42.5451 0.681148 41.5427 0.763269 40.5849 1.03689C39.627 1.31051 38.7325 1.77027 37.9525 2.38986C37.1724 3.00946 36.5222 3.77674 36.0389 4.64783L21.9605 29.9837L13.9032 21.9265C13.2036 21.2022 12.3669 20.6245 11.4417 20.227C10.5165 19.8296 9.52137 19.6204 8.51446 19.6116C7.50755 19.6029 6.50898 19.7948 5.57702 20.1761C4.64505 20.5574 3.79836 21.1204 3.08634 21.8325C2.37432 22.5445 1.81124 23.3912 1.42994 24.3231C1.04864 25.2551 0.856771 26.2537 0.865521 27.2606C0.87427 28.2675 1.08347 29.2626 1.4809 30.1878C1.87834 31.113 2.45605 31.9498 3.18034 32.6493L18.347 47.816C19.7803 49.253 21.714 50.0417 23.7084 50.0417L24.7587 49.9658C25.921 49.8032 27.0298 49.3731 27.9976 48.7092C28.9655 48.0453 29.766 47.1659 30.3363 46.14L49.2946 12.015C49.7786 11.1447 50.0865 10.1875 50.2005 9.19813C50.3146 8.20879 50.2327 7.20665 49.9595 6.24896C49.6863 5.29127 49.2271 4.39678 48.6081 3.61655C47.9892 2.83633 47.2227 2.18567 46.3523 1.7017Z"
                          fill="#24FF00"
                        />
                      </svg>
                    </div>

                    {/* <h3>Best Price Guarantee</h3> */}
                    {home && home.headerPointOne ? (
                      <h3>{home.headerPointOne}</h3>
                    ) : (
                      <h3>Best Price Guarantee</h3>
                    )}
                  </div>
                  <div className="d-flex align-items-center d-gap">
                    <div className="svg-wrap">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="51"
                        height="51"
                        viewBox="0 0 51 51"
                        fill="none"
                      >
                        <path
                          d="M46.3523 1.7017C45.4818 1.21733 44.5244 0.909296 43.5347 0.795222C42.5451 0.681148 41.5427 0.763269 40.5849 1.03689C39.627 1.31051 38.7325 1.77027 37.9525 2.38986C37.1724 3.00946 36.5222 3.77674 36.0389 4.64783L21.9605 29.9837L13.9032 21.9265C13.2036 21.2022 12.3669 20.6245 11.4417 20.227C10.5165 19.8296 9.52137 19.6204 8.51446 19.6116C7.50755 19.6029 6.50898 19.7948 5.57702 20.1761C4.64505 20.5574 3.79836 21.1204 3.08634 21.8325C2.37432 22.5445 1.81124 23.3912 1.42994 24.3231C1.04864 25.2551 0.856771 26.2537 0.865521 27.2606C0.87427 28.2675 1.08347 29.2626 1.4809 30.1878C1.87834 31.113 2.45605 31.9498 3.18034 32.6493L18.347 47.816C19.7803 49.253 21.714 50.0417 23.7084 50.0417L24.7587 49.9658C25.921 49.8032 27.0298 49.3731 27.9976 48.7092C28.9655 48.0453 29.766 47.1659 30.3363 46.14L49.2946 12.015C49.7786 11.1447 50.0865 10.1875 50.2005 9.19813C50.3146 8.20879 50.2327 7.20665 49.9595 6.24896C49.6863 5.29127 49.2271 4.39678 48.6081 3.61655C47.9892 2.83633 47.2227 2.18567 46.3523 1.7017Z"
                          fill="#24FF00"
                        />
                      </svg>
                    </div>

                    {/* <h3>Australia Wide Delivery</h3> */}
                    {home && home.headerPointTwo ? (
                      <h3>{home.headerPointTwo}</h3>
                    ) : (
                      <h3>Australia Wide Delivery</h3>
                    )}
                  </div>
                  <div className="d-flex align-items-center d-gap">
                    <div className="svg-wrap">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="51"
                        height="51"
                        viewBox="0 0 51 51"
                        fill="none"
                      >
                        <path
                          d="M46.3523 1.7017C45.4818 1.21733 44.5244 0.909296 43.5347 0.795222C42.5451 0.681148 41.5427 0.763269 40.5849 1.03689C39.627 1.31051 38.7325 1.77027 37.9525 2.38986C37.1724 3.00946 36.5222 3.77674 36.0389 4.64783L21.9605 29.9837L13.9032 21.9265C13.2036 21.2022 12.3669 20.6245 11.4417 20.227C10.5165 19.8296 9.52137 19.6204 8.51446 19.6116C7.50755 19.6029 6.50898 19.7948 5.57702 20.1761C4.64505 20.5574 3.79836 21.1204 3.08634 21.8325C2.37432 22.5445 1.81124 23.3912 1.42994 24.3231C1.04864 25.2551 0.856771 26.2537 0.865521 27.2606C0.87427 28.2675 1.08347 29.2626 1.4809 30.1878C1.87834 31.113 2.45605 31.9498 3.18034 32.6493L18.347 47.816C19.7803 49.253 21.714 50.0417 23.7084 50.0417L24.7587 49.9658C25.921 49.8032 27.0298 49.3731 27.9976 48.7092C28.9655 48.0453 29.766 47.1659 30.3363 46.14L49.2946 12.015C49.7786 11.1447 50.0865 10.1875 50.2005 9.19813C50.3146 8.20879 50.2327 7.20665 49.9595 6.24896C49.6863 5.29127 49.2271 4.39678 48.6081 3.61655C47.9892 2.83633 47.2227 2.18567 46.3523 1.7017Z"
                          fill="#24FF00"
                        />
                      </svg>
                    </div>

                    {/* <h3>Expert Advice</h3> */}

                    {home && home.headerPointThree ? (
                      <h3>{home.headerPointThree}</h3>
                    ) : (
                      <h3>Expert Advice</h3>
                    )}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>


        <div className="bg-video-wrapper">
          <video autoPlay muted loop className="video-background">
            <source src={bgvideo} type="video/mp4" />
          </video>


        </div>

      </section>

      {/* <section className="extra-gap bg-color">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="whatwedo-heading">
                <h2 className="text-center">Batteries</h2>
                {home && home.batteriesHeading ? (
                  <h2 className="text-center">{home.batteriesHeading}</h2>
                ) : (
                  <h2 className="text-center">Batteries</h2>
                )}
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Magni, voluptatum repellat nesciunt quis placeat doloremque
                  corrupti
                </p>
                {home && home.batteriesDescription ? (
                  <p className="text-center">{home.batteriesDescription}</p>
                ) : (
                  <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Magni, voluptatum repellat nesciunt quis placeat doloremque
                    corrupti
                  </p>
                )}
              </div>
            </Col>
          </Row>

          <Slider />
          <div className="d-flex justify-content-center  home-slider-btn-wrapper">
            <Button
              href="/productlist"
              className="submit-btn primary"
              type="submit"
            >
              See More
            </Button>
          </div>
        </Container>
      </section> */}
      <section className="sec-gap"></section>
      <section className="sec-gap">
        <Container>
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
          <RatingSlider />
        </Container>
      </section>

      <section className="sec-gap  position-relative after-effect">
        <Container fluid="lg">
          <Row>
            <Col md={6}>
              <div className="index-left-part">
                {/* <h2 className="text-black heading">Contact US</h2> */}
                {home && home.ContactUS ? (
                  <h2 className="text-black heading">{home.ContactUS}</h2>
                ) : (
                  <h2 className="text-black heading">Contact US</h2>
                )}
                {/* <p className="sub-heading">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
                  semper at ac tempus enim laoreet massa non..
                </p> */}
                {home && home.ContactUSDescription ? (
                  <p className="sub-heading">{home.ContactUSDescription}</p>
                ) : (
                  <p className="sub-heading">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
                    semper at ac tempus enim laoreet massa non..
                  </p>
                )}
                <div className="Mission-image-wrapper d-flex d-md-none">
                  <img
                    src={battery}
                    alt="Mission image"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className="buttons-wrapper">
                  <Button href="/login" className="primary">
                    Get Started
                  </Button>
                  <Button href="/contactus" className="outline-primary">Talk to Sales</Button>
                </div>
              </div>
            </Col>

            <Col
              md={6}
              className="d-flex justify-content-center align-items-center"
            >
              <div className="Mission-image-wrapper d-none d-md-flex">
                <img
                  src={battery}
                  alt="Mission image"
                  width="100%"
                  height="100%"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Index;
