import React from "react";
import CheckCircle from "../../assets/icons/check-circle.svg";
import Play from "../../assets/icons/blue-play.svg";
import "../Hero/Hero.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dot: true,
  // responsive: [
  //   {
  //     breakpoint: 1240,
  //     settings: {
  //       slidesToShow: 4,
  //       slidesToScroll: 1,
  //     },
  //   },
  //   {
  //     breakpoint: 890,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 1,
  //     },
  //   },
  //   {
  //     breakpoint: 620,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 1,
  //     },
  //   },
  //   {
  //     breakpoint: 440,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //     },
  //   },
  // ],
};

const Hero: React.FC = () => {
  return (
    <div className="hero-container">
      <div className="mx">
        <div className="hero">
          <div className="slider-content">
            <Slider {...settings}>
              <div className="hero-content">
                <div className="check-content">
                  <div className="check">
                    <img src={CheckCircle} alt="" />
                    <h4>
                      ZERO <span>fee education</span>
                    </h4>
                  </div>
                  <div className="check">
                    <img src={CheckCircle} alt="" />
                    <h4>
                      1 <span>on</span> 1
                    </h4>
                  </div>
                </div>
              </div>
              {/* <div className="one">1</div>
              <div className="two">2</div>
              <div className="three">3</div>
              <div className="four">4</div> */}
            </Slider>
          </div>
          <div className="video-content">
            <div className="video">
              <img src={Play} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
