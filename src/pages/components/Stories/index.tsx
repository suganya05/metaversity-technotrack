import React from "react";
import "../Stories/Stories.scss";
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
        <h1>Stories.</h1>
        <p>
          Find out how our Learners transformed their careers after learning
          with us.
        </p>
        <div className="stories">
          {/* <div className="stories-content">
            <div className="stories">
              <img src={RightSide} alt="" />
              <h3>A smooth career transition experience</h3>
              <p>
                From skills to interviews, joining a Great Learning program was
                ideal for my career transition. Due to the pandemic, we had to
                attend online classes after 6 months of classroom learning, but
                thanks to organizers, we faced no difficulties. The faculty is
                amazing and puts in their best efforts to help us understand
                each topic, and the program content was well structured. Special
                thanks to GL Excelerate for helping us be interview-ready.
              </p>
              <div className="star-content">
                <div className="star">
                  <div>
                    <img src={Star} alt="" />
                  </div>
                  <div>
                    <img src={Star} alt="" />
                  </div>
                  <div>
                    <img src={Star} alt="" />
                  </div>
                  <div>
                    <img src={OneSideStar} alt="" />
                  </div>
                  <div>
                    <img src={WhiteStar} alt="" />
                  </div>
                </div>
                <div>
                  <p>29, Sep 2022</p>
                </div>
              </div>
              <div className="defutura-content">
                <div>
                  <h4>Sai Lakshmi Reddi</h4>
                  <p>Frontend Developer</p>
                </div>
                <div>
                  <img src={Defutura} alt="" />
                </div>
              </div>
            </div>

            <div className="girl-img">
              <img src={Girl} alt="" />
            </div>
          </div> */}
          <div className="stories-content">
            <div className="stories">
              <img src={RightSide} alt="" />
              <h3>A smooth career transition experience</h3>
              <p>
                From skills to interviews, joining a Great Learning program was
                ideal for my career transition. Due to the pandemic, we had to
                attend online classes after 6 months of classroom learning, but
                thanks to organizers, we faced no difficulties. The faculty is
                amazing and puts in their best efforts to help us understand
                each topic, and the program content was well structured. Special
                thanks to GL Excelerate for helping us be interview-ready.
              </p>
              <div className="star-content">
                <div className="star">
                  <div>
                    <img src={Star} alt="" />
                  </div>
                  <div>
                    <img src={Star} alt="" />
                  </div>
                  <div>
                    <img src={Star} alt="" />
                  </div>
                  <div>
                    <img src={OneSideStar} alt="" />
                  </div>
                  <div>
                    <img src={WhiteStar} alt="" />
                  </div>
                </div>
                <div>
                  <p>29, Sep 2022</p>
                </div>
              </div>
              <div className="defutura-content">
                <div>
                  <h4>Sai Lakshmi Reddi</h4>
                  <p>Frontend Developer</p>
                </div>
                <div>
                  <img src={Defutura} alt="" />
                </div>
              </div>
            </div>

            <div className="girl-img">
              <img src={Girl} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
