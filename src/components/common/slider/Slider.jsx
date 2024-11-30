import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Battery from "../../../assets/Battery.png"; // Importing the image correctly
import "../../../styles/Slider.scss";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../actions/productActions";
import imageIcon from '../../../assets/mission-image.png'
import { Link } from "react-router-dom";

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

  const dispatch = useDispatch();

  const { Items, loading, error } = useSelector((state) => state.Item);

  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    if (error) {
      console.error(error);
    }
    dispatch(getProducts());
  }, [dispatch, error]);


  useEffect(() => {
    if (Items && Items.length > 0) {
      const shuffled = [...Items].sort(() => 0.5 - Math.random()); // Shuffle the items
      setRandomProducts(shuffled.slice(0, 4)); // Pick the first 4 items
    }
  }, [Items]);




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
        {randomProducts.map((item, index) => (
          <Link to={`/Products/${item.Guid}`} key={index}>
            <div className="slider">
              <Card
                className="slider-card"
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "300px", // Ensures consistent card height
                }}
              >
                <div
                  className="slider-image-wrapper"
                  style={{
                    flex: "1",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    className="slider-img"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100px", // Keeps images consistent
                      objectFit: "contain",
                    }}
                    src={item.ImageUrl || imageIcon} // Use fallback image if `ImageUrl` is null
                    alt={item.ProductDescription}
                  />
                </div>
                <Card.Body
                  className="card-body"
                  style={{
                    flex: "1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <Card.Title
                    className="card-title"
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      lineHeight: "1.2",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 2, // Limits text to two lines
                    }}
                  >
                    {item.ProductDescription}
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
