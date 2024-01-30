"use client";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomPrevArrow = ({ onClick }) => (
  <div
    className="absolute top-[150px] md:top-[175px] lg:top-[200px] 2xl:top-[245px] left-[270px] md:left-[305px] lg:left-[375px] 2xl:left-[-20px] cursor-pointer transform -translate-y-1/2 z-10"
    onClick={onClick}
  >
    <img
      src={"./carousel/leftArrow.svg"}
      alt="Previous"
      className="w-[20px] 2xl:w-[30px]"
    />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div
    className="absolute top-[150px] md:top-[175px] lg:top-[200px] 2xl:top-[245px] right-[290px] md:right-[305px] lg:right-[390px] 2xl:right-[-20px] cursor-pointer transform -translate-y-1/2 z-10"
    onClick={onClick}
  >
    <img
      src={"/carousel/rightArrow.svg"}
      alt="Next"
      className="w-[20px] 2xl:w-[30px]"
    />
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
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    draggable: false,
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
    <div className="mt-10 w-[804px] h-[336px] md:w-[900px] md:h-[400px] lg:w-[1100px] lg:h-[450px] 2xl:w-[1400px] 2xl:h-[500px]">
      <Slider {...settings}>
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
          }

          return (
            <div key={index + 1}>
              <div>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className={`w-[250px] h-[300px] md:w-[300px] md:h-[350px] lg:w-[350px] lg:h-[400px] 2xl:w-[455px] 2xl:h-[490px] rounded-md border-4 border-[#eaf0f4]`}
                  style={{
                    transform: `scale(${
                      index === centerSlideIndex
                        ? 1.0
                        : index === leftSlideIndex || index === rightSlideIndex
                        ? 0.8
                        : 0.6
                    }) translateX(${
                      index === leftSlideIndex
                        ? "40%"
                        : index === leftMostSlideIndex
                        ? "150%"
                        : index === rightSlideIndex
                        ? "-40%"
                        : index === rightMostSlideIndex
                        ? "-150%"
                        : "0%"
                    })`,
                    transition: "transform 0.5s ease-in-out",
                    zIndex: zIndex,
                    position: "relative",
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
