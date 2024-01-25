"use client";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomPrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-[-100px] cursor-pointer transform -translate-y-1/2 z-10"
    onClick={onClick}
  >
    <img src={"./carousel/leftArrow.svg"} alt="Previous" className="w-[32px]" />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-[-100px] cursor-pointer transform -translate-y-1/2 z-10"
    onClick={onClick}
  >
    <img src={"/carousel/rightArrow.svg"} alt="Next" className="w-[32px]" />
  </div>
);

const Carousel = ({ images }) => {
  const [centerSlideIndex, setCenterSlideIndex] = useState(0);
  const [leftSlideIndex, setLeftSlideIndex] = useState(images.length - 1);
  const [leftMostSlideIndex, setLeftMostSlideIndex] = useState(
    images.length - 2
  );
  const [rightSlideIndex, setRightSlideIndex] = useState(1);
  const [rightMostSlideIndex, setRightMostSlideIndex] = useState(2);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "0px",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    beforeChange: (currentSlide, nextSlide) => {
      setCenterSlideIndex(nextSlide);
      setLeftSlideIndex((nextSlide - 1 + images.length) % images.length);
      setLeftMostSlideIndex((nextSlide - 2 + images.length) % images.length);
      setRightSlideIndex((nextSlide + 1) % images.length);
      setRightMostSlideIndex((nextSlide + 2) % images.length);
    },
  };

  return (
    <div className="mt-24 w-[1388px] h-[490px]">
      <Slider {...settings} className="w-full h-full">
        {images.map((image, index) => {
          let zIndex;

          if (index === centerSlideIndex) {
            zIndex = 30;
          } else if (index === leftSlideIndex) {
            zIndex = 20;
          } else if (index === leftMostSlideIndex) {
            zIndex = 10;
          } else if (index === rightSlideIndex) {
            zIndex = 20;
          } else if (index === rightMostSlideIndex) {
            zIndex = 10;
          } else {
            zIndex = 0;
          }

          return (
            <div
              key={index + 1}
              className={`w-full relative inline-block z-${zIndex}`}
            >
              <div className={`w-full h-full`}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className={`w-[309px] h-[333px] rounded-md border-2 border-white`}
                  style={{
                    transform: `scale(${
                      index === centerSlideIndex
                        ? 1.5
                        : index === leftSlideIndex || index === rightSlideIndex
                        ? 1.2
                        : 1.0
                    }) translateX(${
                      index === leftSlideIndex
                        ? "20%"
                        : index === leftMostSlideIndex
                        ? "40%"
                        : index === rightSlideIndex
                        ? "-20%"
                        : index === rightMostSlideIndex
                        ? "-40%"
                        : "0%"
                    })`,
                    transition: "transform 0.5s ease-in-out",
                  }}
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;

//  <div
//             key={index + 1}
//             className={`w-full relative inline-block ${
//               index === centerSlideIndex ? "z-30 center-slide" : "z-0"
//             } ${index === leftSlideIndex ? "left-slide z-20" : "z-0"} ${
//               index === leftMostSlideIndex ? "left-most-slide z-10" : "z-0"
//             } ${index === rightSlideIndex ? "right-slide z-20" : "z-0"} ${
//               index === rightMostSlideIndex ? "right-most-slide z-10" : "z-0"
//             }`}
//           >

// style={{
//   transform: `scale(${
//     index === centerSlideIndex
//       ? 1.5
//       : index === leftSlideIndex || index === rightSlideIndex
//       ? 1.2
//       : 1
//   }) translateX(${
//     index === centerSlideIndex
//       ? "0%"
//       : index === leftSlideIndex
//       ? "-20%"
//       : "20%"
//   })`,
//   transition: "transform 0.5s ease-in-out",
// }}
