import React from "react";
import "../Career/Career.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Images } from "./Career.array";

const settings = {
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1240,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 890,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 620,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 440,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Career: React.FC = () => {
  return (
    <>
      <div className="slider">
        <div className="mx pad">
          <Slider {...settings} className="slide-track">
            {Images.map((f, index) => (
              <>
                <div key={index} className="slide">
                  <f.Images />
                </div>
              </>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Career;
