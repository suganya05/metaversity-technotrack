import React from "react";
import CheckCircle from "../../assets/icons/check-circle.svg";
import Play from "../../assets/icons/blue-play.svg";
import "../Hero/Hero.scss";

const Hero: React.FC = () => {
  return (
    <div className="hero-container">
      <div className="mx">
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
        <div className="video-content">
          <div className="video">
            <img src={Play} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
