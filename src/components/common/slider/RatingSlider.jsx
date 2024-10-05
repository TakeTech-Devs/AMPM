import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Battery from "../../../assets/Battery.png"; // Importing the image correctly
import"../../../styles/RatingSlider.scss"
import { Card } from "react-bootstrap";

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
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="rating-slider" key={index}>
              <Card className="slider-card" style={{ width: "100%", height: "100%"}}>
                <div className="slider-image-wrapper">
                  <div className="rating-wrapper">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="25"
                        viewBox="0 0 26 25"
                        fill="none"
                      >
                        <path
                          d="M12.1732 21.4042C12.6817 21.0973 13.3183 21.0973 13.8268 21.4042L19.0567 24.5608C20.2684 25.2922 21.7632 24.2058 21.4416 22.8274L20.0536 16.8788C19.9186 16.3004 20.1152 15.6948 20.5641 15.3059L25.1869 11.3013C26.2567 10.3746 25.6848 8.61734 24.2745 8.49773L18.1915 7.98182C17.6002 7.93167 17.0852 7.55834 16.8536 7.01194L14.4732 1.39574C13.9218 0.0949328 12.0782 0.0949366 11.5269 1.39574L9.14645 7.01194C8.91486 7.55834 8.39986 7.93167 7.80853 7.98182L1.7256 8.49773C0.315289 8.61734 -0.256595 10.3746 0.813196 11.3013L5.43596 15.3059C5.88489 15.6948 6.08144 16.3004 5.94648 16.8788L4.55848 22.8274C4.23687 24.2058 5.73168 25.2922 6.94341 24.5608L12.1732 21.4042Z"
                          fill="#95C93D"
                        />
                      </svg>
                    </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="25"
                        viewBox="0 0 26 25"
                        fill="none"
                      >
                        <path
                          d="M12.1732 21.4042C12.6817 21.0973 13.3183 21.0973 13.8268 21.4042L19.0567 24.5608C20.2684 25.2922 21.7632 24.2058 21.4416 22.8274L20.0536 16.8788C19.9186 16.3004 20.1152 15.6948 20.5641 15.3059L25.1869 11.3013C26.2567 10.3746 25.6848 8.61734 24.2745 8.49773L18.1915 7.98182C17.6002 7.93167 17.0852 7.55834 16.8536 7.01194L14.4732 1.39574C13.9218 0.0949328 12.0782 0.0949366 11.5269 1.39574L9.14645 7.01194C8.91486 7.55834 8.39986 7.93167 7.80853 7.98182L1.7256 8.49773C0.315289 8.61734 -0.256595 10.3746 0.813196 11.3013L5.43596 15.3059C5.88489 15.6948 6.08144 16.3004 5.94648 16.8788L4.55848 22.8274C4.23687 24.2058 5.73168 25.2922 6.94341 24.5608L12.1732 21.4042Z"
                          fill="#95C93D"
                        />
                      </svg>
                    </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="25"
                        viewBox="0 0 26 25"
                        fill="none"
                      >
                        <path
                          d="M12.1732 21.4042C12.6817 21.0973 13.3183 21.0973 13.8268 21.4042L19.0567 24.5608C20.2684 25.2922 21.7632 24.2058 21.4416 22.8274L20.0536 16.8788C19.9186 16.3004 20.1152 15.6948 20.5641 15.3059L25.1869 11.3013C26.2567 10.3746 25.6848 8.61734 24.2745 8.49773L18.1915 7.98182C17.6002 7.93167 17.0852 7.55834 16.8536 7.01194L14.4732 1.39574C13.9218 0.0949328 12.0782 0.0949366 11.5269 1.39574L9.14645 7.01194C8.91486 7.55834 8.39986 7.93167 7.80853 7.98182L1.7256 8.49773C0.315289 8.61734 -0.256595 10.3746 0.813196 11.3013L5.43596 15.3059C5.88489 15.6948 6.08144 16.3004 5.94648 16.8788L4.55848 22.8274C4.23687 24.2058 5.73168 25.2922 6.94341 24.5608L12.1732 21.4042Z"
                          fill="#95C93D"
                        />
                      </svg>
                    </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="27"
                        viewBox="0 0 26 27"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_184_1447)">
                          <path
                            d="M12.1732 22.4042C12.6817 22.0973 13.3183 22.0973 13.8268 22.4042L19.0567 25.5608C20.2684 26.2922 21.7632 25.2058 21.4416 23.8274L20.0536 17.8788C19.9186 17.3004 20.1152 16.6948 20.5641 16.3059L25.1869 12.3013C26.2567 11.3746 25.6848 9.61734 24.2745 9.49773L18.1915 8.98182C17.6002 8.93167 17.0852 8.55834 16.8536 8.01194L14.4732 2.39574C13.9218 1.09493 12.0782 1.09494 11.5269 2.39574L9.14645 8.01194C8.91486 8.55834 8.39986 8.93167 7.80853 8.98182L1.7256 9.49773C0.315289 9.61734 -0.256595 11.3746 0.813196 12.3013L5.43596 16.3059C5.88489 16.6948 6.08144 17.3004 5.94648 17.8788L4.55848 23.8274C4.23687 25.2058 5.73168 26.2922 6.94341 25.5608L12.1732 22.4042Z"
                            fill="#BCBACD"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_184_1447">
                            <rect
                              width="26"
                              height="26"
                              fill="white"
                              transform="translate(0 0.220215)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="27"
                        viewBox="0 0 26 27"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_184_1447)">
                          <path
                            d="M12.1732 22.4042C12.6817 22.0973 13.3183 22.0973 13.8268 22.4042L19.0567 25.5608C20.2684 26.2922 21.7632 25.2058 21.4416 23.8274L20.0536 17.8788C19.9186 17.3004 20.1152 16.6948 20.5641 16.3059L25.1869 12.3013C26.2567 11.3746 25.6848 9.61734 24.2745 9.49773L18.1915 8.98182C17.6002 8.93167 17.0852 8.55834 16.8536 8.01194L14.4732 2.39574C13.9218 1.09493 12.0782 1.09494 11.5269 2.39574L9.14645 8.01194C8.91486 8.55834 8.39986 8.93167 7.80853 8.98182L1.7256 9.49773C0.315289 9.61734 -0.256595 11.3746 0.813196 12.3013L5.43596 16.3059C5.88489 16.6948 6.08144 17.3004 5.94648 17.8788L4.55848 23.8274C4.23687 25.2058 5.73168 26.2922 6.94341 25.5608L12.1732 22.4042Z"
                            fill="#BCBACD"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_184_1447">
                            <rect
                              width="26"
                              height="26"
                              fill="white"
                              transform="translate(0 0.220215)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>
                </div>
                <Card.Body className="d-flex align-items-center justify-content-center">
                  <Card.Title>
                    <p>{imageUrl.title}</p>
                    <h3 >{imageUrl.name}</h3>
                    <p className="types">{imageUrl.department}</p>
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
