import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Battery from "../../../assets/Battery.png";
import "../../../styles/RatingSlider.scss";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getTestimonial, clearErrors } from "../../../actions/userActions";
import ReactStars from "react-rating-stars-component";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 992 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 991, min: 768 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Slider = () => {
  const dispatch = useDispatch();

  const { testimonialList, error, loading: testimonialListLoading } = useSelector(
    (state) => state.testimonials
  );

  const [expandedStates, setExpandedStates] = useState([]);
  const [overflowStates, setOverflowStates] = useState([]);

  const refs = useRef([]);

  useEffect(() => {
    // Dispatch testimonials on component mount
    if (error) {
      window.alert(error);
      dispatch(clearErrors());
    }
    dispatch(getTestimonial());
  }, [dispatch, error]);

  useEffect(() => {
    // Update overflow states whenever testimonials change
    refs.current = refs.current.slice(0, testimonialList.length);
    const updatedOverflowStates = testimonialList.map((_, idx) =>
      refs.current[idx] ? refs.current[idx].scrollHeight > refs.current[idx].clientHeight : false
    );
    setOverflowStates(updatedOverflowStates);
    setExpandedStates(Array(testimonialList.length).fill(false));
  }, [testimonialList]);

  const toggleExpand = (index) => {
    setExpandedStates((prev) =>
      prev.map((state, idx) => (idx === index ? !state : state))
    );
  };

  return (
    <div className="ratingSlider-parent">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {testimonialList.map((testimonial, index) => (
          <div className="rating-slider" key={index}>
            <Card className="slider-card" style={{ width: "100%", height: "100%" }}>
              <div className="slider-image-wrapper">
                <ReactStars
                  count={5}
                  value={testimonial.rating}
                  size={30}
                  isHalf={true}
                  edit={false}
                  activeColor="#95c93d"
                />
              </div>
              <Card.Body className="d-flex justify-content-center">
                <Card.Title>
                  <p
                    ref={(el) => (refs.current[index] = el)}
                    style={{
                      maxHeight: expandedStates[index] ? "15em" : "15em", // Adjust height when expanded
                      overflow: expandedStates[index] ? "auto" : "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: expandedStates[index] ? "unset" : 7, // Clamp lines when not expanded
                      WebkitBoxOrient: "vertical",
                      paddingRight: expandedStates[index] ? "8px" : "0",
                    }}
                  >
                    {testimonial.testimonial}
                  </p>
                  {overflowStates[index] && (
                    <button
                      className="see-more-btn"
                      onClick={() => toggleExpand(index)}
                      style={{
                        background: "none",
                        border: "none",
                        color: "#007bff",
                        cursor: "pointer",
                        padding: 0,
                        marginTop: "10px",
                      }}
                    >
                      {expandedStates[index] ? "See Less" : "See More"}
                    </button>
                  )}
                  <h3>{testimonial.name}</h3>
                  <p className="types">{testimonial.role}</p>
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
