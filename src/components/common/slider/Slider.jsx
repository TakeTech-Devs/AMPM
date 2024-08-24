import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Battery from "../../../assets/Battery.png"; // Importing the image correctly
import "../../../styles/Slider.scss";
import { Card } from "react-bootstrap";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 992 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 40 
  },
  tablet: {
    breakpoint: { max: 991, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 576 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  smallmobile: {
    breakpoint: { max: 576, min: 319 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const sliderImageUrl = [
  // Array of image URLs
  {
    url: Battery, // Directly assign the imported image
    name: "Power max",
  },
  {
    url: Battery, // Repeat for other images
    name: "Power max",
  },
  {
    url: Battery,
    name: "Power max",
  },
  {
    url: Battery,
    name: "Power max",
  },
];

const Slider = () => {
  return (
    <div className="order-parent">
      <Carousel
        responsive={responsive}
        // autoPlay={true}
        swipeable={true}
        draggable={true}
        // showDots={true}
        infinite={true}
        partialVisible={false}
        itemClass="carousel-item-padding-40-px"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <Card className="slider-card" style={{ width: "100%" }}>
                <div className="slider-image-wrapper">
                  <img
                    className="slider-img"
                    src={imageUrl.url}
                    alt="Battery"
                  />
                </div>
                <Card.Body className="d-flex align-items-center justify-content-center">
                  <div className="">
                    <Card.Title>
                      <h3 className="text-center">{imageUrl.name}</h3>
                    </Card.Title>
                  </div>
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
