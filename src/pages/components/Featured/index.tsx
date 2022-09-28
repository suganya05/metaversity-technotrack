import React from "react";
import "../Featured/Featured.scss";
import TheHindu from "../../../assets/images/the-hindu.png";
import TheTimesOfIndia from "../../../assets/images/the-times-of-india.png";
import RightVector from "../../../assets/icons/right-side-vector.svg";
import LeftVector from "../../../assets/icons/left-side-vector.svg";

const Featured: React.FC = () => {
  return (
    <div className="featured-container">
      <div className="mx">
        <h1>Featured on</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <div className="featured-content">
          <div className="hindu-content">
            <div className="the-hindu">
              <img src={TheHindu} alt="" />
            </div>
            <div className="right">
              <img src={RightVector} alt="" />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="left">
              <img src={LeftVector} alt="" />
            </div>
            <p>
              <span>23, sep 22</span>
            </p>
          </div>

          <div className="hindu-content">
            <div className="the-hindu">
              <img src={TheHindu} alt="" />
            </div>
            <div className="right">
              <img src={RightVector} alt="" />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="left">
              <img src={LeftVector} alt="" />
            </div>
            <p>
              <span>23, sep 22</span>
            </p>
          </div>

          <div className="hindu-content">
            <div className="the-hindu">
              <img src={TheHindu} alt="" />
            </div>
            <div className="right">
              <img src={RightVector} alt="" />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="left">
              <img src={LeftVector} alt="" />
            </div>
            <p>
              <span>23, sep 22</span>
            </p>
          </div>

          <div className="hindu-content">
            <div className="the-hindu">
              <img src={TheHindu} alt="" />
            </div>
            <div className="right">
              <img src={RightVector} alt="" />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="left">
              <img src={LeftVector} alt="" />
            </div>
            <p>
              <span>23, sep 22</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
