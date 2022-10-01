import React from "react";
import "../Stories/Stories.scss";
import { DemoStories } from "./StoriesArray";
import RightSide from "../../../assets/icons/right-side-vector.svg";
import Star from "../../../assets/icons/star.svg";
import OneSideStar from "../../../assets/icons/oneSide-star.svg";
import WhiteStar from "../../../assets/icons/white-star.svg";
import Defutura from "../../../assets/logos/defutura.svg";
import Girl from "../../../assets/images/girl-img.png";

const Stories: React.FC = () => {
  return (
    <div className="stories-container">
      <div className="mx">
        <div className="stories-head">
          <h1>Stories.</h1>
          <p>
            Find out how our Learners transformed their careers after learning
            with us.
          </p>
        </div>
        <div className="stories-content">
          {DemoStories.map((f, i) => {
            return (
              <>
                <div className="stories">
                  <div key={i} className="stories-para">
                    <img src={RightSide} alt="" />
                    <h3>{f.title}</h3>
                    <p>{f.description}</p>
                    <div className="flex-one">
                      <div className="stars">
                        <img src={Star} alt="" />
                        <img src={Star} alt="" />
                        <img src={Star} alt="" />
                        <img src={OneSideStar} alt="" />
                        <img src={WhiteStar} alt="" />
                      </div>
                      <div className="date">
                        <span>{f.date}</span>
                      </div>
                    </div>
                    <div className="flex-two">
                      <div className="developer">
                        <h5>{f.name}</h5>
                        <h6>{f.developer}</h6>
                      </div>
                      <div className="defutura">
                        <img src={Defutura} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="girl-img">
                  <img src={Girl} alt="" />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stories;
