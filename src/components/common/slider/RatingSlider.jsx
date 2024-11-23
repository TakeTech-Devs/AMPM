import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Battery from "../../../assets/Battery.png"; // Importing the image correctly
import "../../../styles/RatingSlider.scss"
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { getTestimonial } from "../../../actions/userActions";
import ReactStars from "react-rating-stars-component";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 992 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 991, min: 768 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const sliderImageUrl = [
  // Array of image URLs
  {
    url: Battery, // Directly assign the imported image
    title: '“Lorem ipsum dolor sit amet conse ctetur adipiscing lectus a nunc mauris scelerisque sed egestas pharetraol quis pharetra arcu pharetra blandit.”',
    name: "John Carter",
    department: "Web Designer"
  },
  {
    url: Battery, // Repeat for other images
    title: '“Convallis posuere morbi leo urna molestie at elementum eu facilisis sapien pellentesque habitant morbi tristique senectus et netus et uteu.”',
    name: "Matt Cannon",
    department: "Lead Developer"
  },
  {
    url: Battery,
    title: '“Lorem ipsum dolor sit amet conse ctetur adipiscing lectus a nunc mauris scelerisque sed egestas pharetraol quis pharetra arcu pharetra blandit.”',
    name: "Andy Smith",
    department: "VP of Marketing"
  },
];

const Slider = () => {

  const dispatch = useDispatch();

  const { testimonialList, error, loading: testimonialListLoading } = useSelector((state) => state.testimonials);


  useEffect(() => {
    if (error) {
      window.alert(error);
      dispatch(clearErrors());
    };

    dispatch(getTestimonial())
  }, [dispatch, error])


  return (
    <div className="ratingSlider-parent">
      <Carousel
        responsive={responsive}
        // autoPlay={true}
        swipeable={true}
        draggable={true}
        // showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {testimonialList.map((imageUrl, index) => {
          return (
            <div className="rating-slider" key={index}>
              <Card className="slider-card" style={{ width: "100%", height: "100%" }}>
                <div className="slider-image-wrapper">
                  {/* <div> */}
                    <ReactStars
                      count={5}
                      value={imageUrl.rating}
                      size={30}
                      isHalf={true}
                      edit={false}
                      activeColor="#95c93d"
                    />
                  {/* </div> */}
                </div>
                <Card.Body className="d-flex  justify-content-center">
                  <Card.Title>
                    <p>{imageUrl.testimonial}</p>
                    <h3 >{imageUrl.name}</h3>
                    <p className="types">{imageUrl.role}</p>
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </Carousel>

    </div>
  );
};

export default Slider;
